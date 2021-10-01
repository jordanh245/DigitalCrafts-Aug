import React from 'react'
import {InfoArea, InfoHeader, AllInfo} from "../styled-components/DBstyle"
function DB(props) {
	const {firstName, lastName, DOB, address, city, state, zipcode, username, email} = props.info;
	
	return (
		
		<InfoArea>
			<InfoHeader>Information</InfoHeader>
		<AllInfo>Name: {firstName} {lastName}</AllInfo>
		<AllInfo>DOB: {DOB} </AllInfo>
		<AllInfo>Address: {address} {city} {state} {zipcode}</AllInfo>
		<AllInfo>Username: {username}</AllInfo>
		<AllInfo>Email: {email}</AllInfo>
		
		</InfoArea>
		
	)
}
 export default DB;