
const jwt = require('jsonwebtoken');



function authenticate(req, res, next){

	const authHeader = req.headers['authorization'];
	// console.log(authHeader.split(' ')[1])
	if(authHeader) {
		let token = authHeader.split(' ')[1]
		
		try {
			const decoded = jwt.verify(token, secretToken);
			
			if (decoded) {
				const email = decoded.email;
				creds.connect(async () => {
					const userAccount = await creds.query(
						`SELECT * FROM users WHERE email= '${email}'`
					);
					res.json(userAccount);
					
				});
			}else {
				res.json({success: false, message: "not a user"});
			}
		}catch (error) {
			res
			.status(401).json({success: false, message:"token is wrong"});
		}
	}else {
		res
		.status(401).json({success: false, message: "no headers"});

	}


}

module.exports = authenticate