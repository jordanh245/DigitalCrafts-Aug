const Sequelize = require('sequelize')
const express = require('express')
const {Users} = require('./models')

const app = express()
const PORT = 3013;


app.use(express.json())

app.post("/createUsers", async (req, res) => {
	const {firstName,lastName,email} = req.body

	const newUser = await Users.create({
		firstName:firstName,
		lastName:lastName,
		email:email,
	});
	res.send({
		id:newUser.id,
	})
})

app.post("/getUsers", async (req, res) => {
	const {firstName,lastName,email} = req.body
	const users = await Users.findAll();
	res.send(users)
})


app.post("/getUsersByLastName", async (req, res) => {
	const {firstName,lastName,email} = req.body
	const users = await Users.findAll({
		attributes:["lastName"]
	});
	res.send(users)
})


app.post("/getUsers/:id", async (req, res) => {
	
	const user = await Users.findByPk(req.params.id);
	res.send(user)
})


app.post("/updateUsers/:id", async (req, res) => {
	
	const user = await Users.update(req.body,{
		where: {
			id:req.params.id
		}
	});
	res.send(user)
})


app.post("/deleteUsers/:id", async (req, res) => {
	
	const user = await Users.destroy({
		where: {
			id:req.params.id
		}
	});
	res.send('Deleted')
})






app.listen(PORT, console.log(` on ${PORT}`))

