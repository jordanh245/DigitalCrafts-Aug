const express = require('express');
const { Client } = require('pg');
const app = express();
const creds = require("./fuber");

const PORT = 3012;



app.use(express.json());

app.get("/showCustomers", (req, res)=>{
	creds.connect((err,client,release)=>{
		if(err){
			return console.error('Error getting connected to the client, err.stack')
		}
		client.query("SELECT * FROM customers", (err, result)=> {
		release()
			if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result.rows)
	})});
});


app.get("/showOrders", (req, res)=>{
	creds.connect((err,client,release)=>{
		if(err){
			return console.error('Error getting connected to the client, err.stack')
		}
		client.query("SELECT * FROM orders", (err, result)=> {
		release()
			if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result.rows)
	})});
});


app.get("/showCars", (req, res)=>{
	creds.connect((err,client,release)=>{
		if(err){
			return console.error('Error getting connected to the client, err.stack')
		}
		client.query("SELECT * FROM cars", (err, result)=> {
		release()
			if(err){
			res.status(400).send(err.stack)
		}
		res.status(200).send(result.rows)
	})});
});











app.listen(PORT, console.log(`listening on ${PORT}`))
