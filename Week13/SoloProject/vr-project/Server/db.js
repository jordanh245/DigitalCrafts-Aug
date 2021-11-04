const Pool = require("pg").Pool;

const creds = new Pool({
	host: "fanny.db.elephantsql.com",
	port: "5432",
	database: "kjtwwmvu", 
	user: "kjtwwmvu",
	password: "cjGdbEUKTgOi8Ztz4nHtkTjygOEJazWD"

})

module.exports =creds;