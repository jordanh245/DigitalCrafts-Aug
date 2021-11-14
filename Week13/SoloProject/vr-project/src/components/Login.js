
import React, { useState } from 'react'



function Login() {
	const [loginInfo, setLoginInfo] = useState({})
	

	const handleChange = (e) => {
		setLoginInfo({
			...loginInfo,
			[e.target.name]: [e.target.value]
		})
	}

	const handleLogin = () => {
		fetch("http://localhost:3002/login", {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify(loginInfo)
		}).then(response => response.json())
		.then(result => {
			console.log(result)
		})

	
	}
	
	return (
		<div>
			
			<input type="text" name="email"  onChange={handleChange} placeholder="email" />
			<input type="text" name="password" onChange={handleChange} placeholder="password" />
			<button onClick={handleLogin}>SUBMIT</button>
			
		</div>
	)
	}

export default Login
