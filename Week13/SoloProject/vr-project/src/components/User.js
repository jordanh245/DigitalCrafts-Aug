import React from 'react'

export default  function User(props) {
const {account} = props
	
	return (
		<div>
			<h1>USER</h1>
		<h1>{account?.firstname}</h1>
		<h1>{account?.lastname}</h1>
		<h1>{account?.email}</h1>
	
		</div>
	)
}

