import React from 'react'
import { useHistory } from 'react-router'

export default  function User(props) {
const {account} = props
const history = useHistory();	
const checkLogin = localStorage.getItem("jsonwebtoken")

function logOut() {
	localStorage.removeItem("jsonwebtoken");
	history.push("/login")
	
}
	return (
		<div>
			<h1>USER</h1>
		<h1>{account?.firstname}</h1>
		<h1>{account?.lastname}</h1>
		<h1>{account?.email}</h1>
	{checkLogin ?<button onClick={(e)=> logOut(e)}>LOG OUT</button> : null}
		</div>
	)
}

