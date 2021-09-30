import React from 'react'

function DB(props) {
	const {signupInfo} = props;
	console.log(signupInfo)
	return (
		
		<div>
		<h1>DB</h1>
		<p>{signupInfo}</p>
		</div>
	)
}
 export default DB;