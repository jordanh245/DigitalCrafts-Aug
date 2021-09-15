const Pool = require("pg").Pool

const creds = new Pool({
	
	host: "localhost",
	port: 5432,
	database: "fuber2",
	user: "",
	password: ""

})

module.exports = creds;