const Sequelize = require('sequelize')
const express = require('express')
const {Chores} = require('./models')

const app = express()
const PORT = 3015;

app.use(express.json())


const es6Renderer = require('express-es6-template-engine');


app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");


app.get('/', (req, res) => {
	res.render('index');
})




// CREATE
app.post("/createTodo", async (req, res) => {
	const {choreName} = req.body

	const newUser = await Chores.create({
		choreName:choreName
	});
	res.send({
		id:newUser.id,
	})
})





// READ
app.post("/getChores", async (req, res) => {
	const {choreName} = req.body
	const chore = await Chores.findAll();
	res.send(chore)
})

app.post("/getChores/:id", async (req, res) => {
	
	const chore = await Chores.findByPk(req.params.id);
	res.send(chore)
})




// UPDATE
app.post("/updateChores/:id", async (req, res) => {
	
	const chore = await Chores.update(req.body,{
		where: {
			id:req.params.id
		}
	});
	res.send(chore)
})





// 	DELETE
app.post("/deleteChores/:id", async (req, res) => {
	
	const chore = await Chores.destroy({
		where: {
			id:req.params.id
		}
	});
	res.send('Deleted chore')
})
app.listen(PORT, console.log(`on ${PORT}`))