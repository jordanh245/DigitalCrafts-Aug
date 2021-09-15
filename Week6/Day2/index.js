const express = require("express")
const app = express()
const PORT = 3002
const student = {name: 'jordan'}


const escRenderer = require("express-es6-template-engine");
app.engine('html', escRenderer);
app.set('views', 'templates'); 
app.set('view engine', 'html');

app.get ('/', (req, res) => {
	let list = `<ul>`
	for(let student of students){
		list += `<li>;
		<p>${student.name}</p>
		
		
		
		</li>`
	}
	
	list += `</ul>`;
	console.log(list);
	
	
	
	
	
	res.render('home',{
	locals:{
		student,	
	}
	
	})
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));