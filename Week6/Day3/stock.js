const express = require("express")
const app = express()
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
	"https://rkghunufxflcdhxdffkk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIyNzA0NSwiZXhwIjoxOTQ2ODAzMDQ1fQ.AiXHSApnrip0Jjl2AyDuVPBU7HOtxPpnV784z0qBKEc"
  );

app.use(express.json());
const PORT = 3004




// not working??
app.post("/createStocks", async (req, res) => {
	console.log(req.body);
	const { data, error } = await supabase.from("Stocks").insert([req.body]);
  
	res.send('aefef')
  });



app.listen(PORT, console.log(`Listening on port ${PORT}`))