const express = require("express");
const app = express();
const cors= require("cors");
const creds = require("./db");
const PORT = 3001;



app.use(express.json());
app.use(cors());



// user routes
app.post("/register", (req, res) => {
	creds.connect(async()=> {
		try{
			const user = await creds.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.password}')`)
			res.send(data);

		}catch(err){
			res.send(err);
		}
	})

})
	

app.get("/readUser", (req, res) => {
	creds.connect(async()=> {
		try { 
			const userData = await creds.query(`SELECT * FROM users`);
			res.send(userData);

	}catch(err){
		res.send(err);
	}
	})
	
})

// product route 
app.get("/readProducts", (req, res) => {
	creds.connect(async()=> {
		try { 
			const productData = await creds.query(`SELECT * FROM products`);
			res.send(productData);
			
	}catch(err){
		res.send(err);
	}
	})
	
})



app.listen(PORT, console.log(`working ${PORT}`))