const express = require("express");
const app = express();
const cors = require("cors");
const creds = require("./db");
const PORT = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("./Middleware/AuthMiddleware");
const { useStore } = require("react-redux");

app.use(express.json());
app.use(cors());

const secretToken = "putinenv";
app.get("/", (req, res) => {});

// user routes
app.post("/register", (req, res) => {
  creds.connect(async () => {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = await creds.query(
        `INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hashedPassword}')`
      );
    } catch (err) {
      res.send(err);
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const loginConst = async () => {
    try {
      const userInfo = await creds.query(
        `SELECT * FROM users WHERE email='${email}'`
      );
      const userRight = await bcrypt.compare(
        password,
        userInfo.rows[0].password
      );
      if (userRight) {
        const token = jwt.sign({ email: email }, secretToken);
        res.json({ success: true, token: token });
        console.log("working");
      } else {
        res.json({
          success: false,
          message: "not working",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  creds.connect(() => {
    loginConst();
  });
});
app.post("/user", authenticate, (req, res) => {});

app.get("/account/:email", (req, res) => {
  const email = req.params.email;
  const authHeader = req.headers["authorization"];
  // console.log(authHeader.split(' ')[1])
  if (authHeader) {
    let token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secretToken);

      if (decoded) {
        const email = decoded.email;
        creds.connect(async () => {
          const userAccount = await creds.query(
            `SELECT * FROM users WHERE email= '${email}'`
          );
          res.json(userAccount);
        });
      } else {
        res.json({ success: false, message: "not a user" });
      }
    } catch (error) {
      res.status(401).json({ success: false, message: "token is wrong" });
    }
  } else {
    res.status(401).json({ success: false, message: "no headers" });
  }
});


		

// product route
app.get("/readProducts", (req, res) => {
  creds.connect(async () => {
    try {
      const productData = await creds.query(`SELECT * FROM products`);
      res.send(productData);
    } catch (err) {
      res.send(err);
    }
  });
});



const stripe = require("stripe")(
  "sk_test_51Jvn4JK9lSkN4Pbd8xMbPYA1K5C67Ajj0RO2eSaej0WJrALaQgkrALhZPXdI467qOx3bRXvLvXhoNSnjFkyXh9iJ00hw3bK1J1"
);

app.use(express.static("public"));


app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1JxYjZK9lSkN4PbdutSP8CdV",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3001/products",
  });

  res.redirect(303, session.url);
});

app.get("/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.write(
    `<html>
	<head>
	  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
	</head>
	  <style>
		body {
		  text-align: center;
		  padding: 40px 0;
		  background: #EBF0F5;
		}
		  h1 {
			color: blue;
			font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 10px;
		  }
		  p {
			color: #404F5E;
			font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
			font-size:20px;
			margin: 0;
		  }
		i {
		  color: blue;
		  font-size: 100px;
		  line-height: 200px;
		  margin-left:-15px;
		}
		.card {
		  background: white;
		  padding: 60px;
		  border-radius: 4px;
		  box-shadow: 0 2px 3px #C8D0D8;
		  display: inline-block;
		  margin: 0 auto;
		}
	  </style>
	  <body>
		<div class="card">
		<div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
		  
		</div>
		  <h1>Success</h1> 
		  <p>We received your purchase!<br/> Your order will be shipped shortly!</p>
    
		</div>
	  </body>
  </html>`
  );
});

app.listen(PORT, console.log(`working ${PORT}`));
