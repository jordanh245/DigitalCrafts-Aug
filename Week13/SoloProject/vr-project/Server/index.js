const express = require("express");
const app = express();
const cors= require("cors");
const creds = require("./db");
const PORT = 3002;
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
			console.log(user)
			res.send(user.body);

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




// app.post("/updateUser", (req, res) => {
//creds.connect(()=> {
	// creds.query(`UPDATE "users" SET firstname=${req.body.firstname}, ${req.body.lastname}, ${req.body.email}, ${req.body.password} WHERE `)


	
// }
// app.post("/deleteUser", (req, res) => {
// 	creds.connect(()=> {
// 		creds.query ()


// }
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