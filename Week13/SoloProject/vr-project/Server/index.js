const express = require("express");
const app = express();
const cors= require("cors");
const creds = require("./db");
const PORT = 3000;
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');



app.use(express.json());
app.use(cors());

const secretToken = "putinenv"

// user routes
app.post("/register", (req, res) => {
	creds.connect(async()=> {
		try{
			const salt = await bcrypt.genSalt();
			const hashedPassword = await bcrypt.hash(req.body.password, salt)
			
			const user = await creds.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hashedPassword}')`)
			
			

		}catch(err){
			res.send(err);
		}
	})

})
	




app.post("/login", (req, res) => {

const email = req.body.email;
const password = req.body.password


const compare = async (info, res) => {
	const checkPass = await bcrypt.compare(password, info.rows[0].password)
	
	if (checkPass) {
		const jsonToken =jwt.sign({email: req.body.email}, secretToken)
		res.json({
			firstname: info.rows[0].firstname,
			lastname: info.rows[0].lastname,
			email: info.rows[0].email,
			user_id: info.rows[0].user_id,
			 jsonToken: jsonToken})
		res.send(res)

	} else {
		res.send("Incorrect pass or email/ not authenticated")
	}
}
creds.connect (()=> {
	if(email) {
		creds.query(
			`SELECT * from "users" WHERE email = '${email}'`,
			(error, info) => {
				if (info) {
					compare(info, res)
				} else {
					res.send(error)
				}
			}
		);
	} else {
		res.send("Invalid");
		
	}
})


})





	

// app.delete("/deleteUserInfo", (req, res) => {
// 	creds.connect((err)=> {
// 		try{
// 		creds.query (`DELETE FROM "users" WHERE email = ${req.body.email}`)
// 		}catch(err){
// 			res.send(err);
// 		}
// 	})
// }
// )

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









app.post('/pay', async (req, res) => {
  const {email} = req.body 
	
	const paymentIntent = await stripe.paymentIntents.create({
	amount: 5000,
	currency: 'usd',
	
	metadata: {integration_check: 'accept_a_payment'},
	receipt_email: email,
  });
  res.json({'client_secret': paymentIntent['client_secret']})
});

const stripe = require('stripe')('sk_test_51Jvn4JK9lSkN4Pbd8xMbPYA1K5C67Ajj0RO2eSaej0WJrALaQgkrALhZPXdI467qOx3bRXvLvXhoNSnjFkyXh9iJ00hw3bK1J1')












app.listen(PORT, console.log(`working ${PORT}`))