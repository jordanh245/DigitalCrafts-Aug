// const cowsay = require("cowsay");
// console.log(cowsay.say())

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));


const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  console.log(req)
	res.send(`<h1>Hello World</h1>`)
})

app.post('/cats', (req, res) => {
	res.send(`<p>Meow!</p>`)
  })

app.put('/dogs', (req, res) => {
	res.send(`<h2>Woof!</h2>`)
  })

app.patch('/cats_and_dogs', (req, res) => {
	res.send(`<h3>Dogs and cats living together...mass hysteria!!</h3>`)
  })
 
app.listen(3000, console.log('im on port 3000'))