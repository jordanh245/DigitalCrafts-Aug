import React from 'react'
import { useHistory } from 'react-router'
import {UserDiv, UserDivLeft, UserDivRight, LogoutButtonStyle, UserP, ButtonDiv} from "../styled-components/UserStyle"
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
	<UserDiv>
		<UserDivLeft>
			<h1>USER</h1>
			<p>Provided is your current user info:</p>
			</UserDivLeft>
		<UserDivRight>

		<h1>First Name:  {account?.firstname}</h1>
		<h1>Last Name:  {account?.lastname}</h1>
		<h1>Email: {account?.email}</h1>
		<ButtonDiv>
		{checkLogin ?<LogoutButtonStyle onClick={(e)=> logOut(e)}>LOG OUT</LogoutButtonStyle> : null}
		</ButtonDiv>
		</UserDivRight>
		

</UserDiv>


</div>
	)
}

