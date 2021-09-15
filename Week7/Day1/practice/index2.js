const express = require('express');
const app = express();
const creds = require("./db2");
const PORT = 3009;

app.use(express.json());
// restaurant
app.get("/showUserRestaurant", (req, res)=>{
	creds.connect((err,client,release)=>{
		if(err){
			return console.error('Error getting connected to the client, err.stack')
		}
		client.query("SELECT * FROM restaurants", (err, result)=> {
		release()
			if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result.rows)
	})});
});



app.post("/getUserRestaurant", (req, res)=>{
	


	creds.connect((err,client,release)=>{
		if(err){
			return console.log('Error getting connected to the client, err.stack')
		}
		client.query(`INSERT INTO users (id,name) VALUES (${req.body.id}, '${req.body.name}')`, (err, result)=> {;
		if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result)
	})})
})


// movies

app.get("/showUserMovies", (req, res)=>{
	creds.connect((err,client,release)=>{
		if(err){
			return console.error('Error getting connected to the client, err.stack')
		}
		client.query("SELECT * FROM movies", (err, result)=> {
		release()
			if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result.rows)
	})});
});



app.post("/getUserMovies", (req, res)=>{
	


	creds.connect((err,client,release)=>{
		if(err){
			return console.log('Error getting connected to the client, err.stack')
		}
		client.query(`INSERT INTO movies (id,name,yearmade) VALUES (${req.body.id}, '${req.body.name}',${req.body.yearmade})`, (err, result)=> {;
		if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result)
	})})
})
app.listen(PORT, console.log(`listening on ${PORT}`));