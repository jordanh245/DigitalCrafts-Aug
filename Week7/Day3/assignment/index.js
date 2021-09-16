const Sequelize = require('sequelize')
const express = require('express')
const {Chores} = require('./models')
const cors = require('cors');
const app = express()
const PORT = 3018;
const path = require('path')
app.use(express.json())
app.use(cors())

const es6Renderer = require('express-es6-template-engine');


app.engine("html", es6Renderer);
app.set("views", "client");
app.set("view engine", "html");

app.use("/client",express.static(path.join(__dirname, "client")))

app.get('/', (req, res) => {
	res.render ('home', {
		locals: {
			Chores
			
		}
	})
})




// CREATE
app.post("/createTodo", async (req, res) => {
	const choreName = req.body.choreName;
	
	const newChore = await Chores.create({
		choreName:choreName,
	});
	res.send({
		id:newChore.id,
	})
	
})





// READ
app.get("/getChores", async (req, res) => {
	
	const chore = await Chores.findAll();
	res.json(chore)
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
	res.send("deleted")
})
app.listen(PORT, console.log(`on ${PORT}`))