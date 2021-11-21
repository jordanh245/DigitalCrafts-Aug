

import React, { useState } from 'react'
import {connect } from "react-redux"
import {useHistory} from "react-router-dom"
import "../loginstyle.css"


 function Login(props) {
	
	const [loginInfo, setLoginInfo] = useState({
		email:"",
		password:"",

	})

	const history = useHistory()



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
		
	};




	return (
		
			  <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
		<input type="text"  placeholder="Email" 
            onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} name="email"/>
          <input type="text"  placeholder="Password" 
            onChange={(e) => setLoginInfo({...loginInfo, [e.target.name]:e.target.value})} name="password"/>
          <button onClick={(e)=>handleLogin(e)}>LOGIN</button>
          <p className="message">Not registered? <a href="/register">Create an account</a></p>
        </form>
      </div>
    </div>
			
	)
	}
const mapDispatchToProps = (dispatch) => {
	return {
		onLoggedIn: () => dispatch({type: "ON_LOGGED_IN"})
	};
};

export default connect(null, mapDispatchToProps)(Login);
	
