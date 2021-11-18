

import React, { useState } from 'react'
import {connect } from "react-redux"
import {useHistory} from "react-router-dom"


 function Login(props) {
	
	const [loginInfo, setLoginInfo] = useState({
		email:"",
		password:"",

	})

	const history = useHistory()
//   CHANGE HANDLE TO THIS
	// const handleChange = (e) => {
	// 	setLoginInfo ({
	// 		...loginInfo,
	// 		[e.target.name]: e.target.value
	// 	})
	// }


	const handleLogin = async (e) => {
		e.preventDefault();
		const login = await fetch('http://localhost:3000/login', {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type":"application/json",
				
			},
			body: JSON.stringify(loginInfo)
		}) .then(response => response.json())
		.then((result) => {
			// console.log(result)
			if (result.success === true) {
				const token = result.token
				localStorage.setItem("jsonwebtoken", token);
				props.onLoggedIn();
				props.history.push("/account")
			}
		})
		// window.location.reload(false);
	};




	return (
		<div>
			
			<input type="text"  placeholder="email" 
            onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} name="email"/>
			<input type="text"  placeholder="password" 
            onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} name="password"/>
			<button onClick={(e)=>handleLogin(e)}>SUBMIT</button>
			<a href="/register">New here? Click here to register!</a>
		</div>
	)
	}
const mapDispatchToProps = (dispatch) => {
	return {
		onLoggedIn: () => dispatch({type: "ON_LOGGED_IN"})
	};
};

export default connect(null, mapDispatchToProps)(Login);
	
