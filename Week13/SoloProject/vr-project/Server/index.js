const express = require("express");
const app = express();
const cors= require("cors");
const creds = require("./db");
const PORT = 3006;
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

app.use(express.json());
app.use(cors());



// user routes
app.post("/register", (req, res) => {
	creds.connect(async()=> {
		try{
			const salt = await bcrypt.genSalt();
			const hashedPassword = await bcrypt.hash(req.body.password, salt)
			
			const user = await creds.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hashedPassword}')`)
			res.send(user.body);

		}catch(err){
			res.send(err);
		}
	})

})
	


// app.post("/login", (req, res) => {
// 	creds.connect( async()=> {
	
// 	const email = req.body.email
// 	const password = req.body.username

// 	users.find((users) => users.email === email && users.password === password)
// 	if(users) {
// 		jwt.sign({email: users.email}, "SECRETKEY (CHANGE THIS)")
// 		res.json({success: true, token:token})
// 	}else {
// 		res.json({success:false, message: "not aythenticated"})
		
	
// 	}
// 	})
// })

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