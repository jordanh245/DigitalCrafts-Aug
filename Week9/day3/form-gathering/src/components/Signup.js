import React from "react";


function Signup(props) {
	const {signupInfo, setSignupInfo} = props
	// console.log(signupInfo)
	
	return (
		
		
		<div>
			
		<h1>Sign up</h1>
		
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})
	} type="text" placeholder = "First Name" name="firstName"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Last Name"name="lastName"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" name=""/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Address" name="address"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "City" name="city"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "State" name="state"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Zipcode" name="zipcode"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Username" name="username"/>
		<input onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Email" name="email"/>
		<input  onClick={()=>setSignupInfo({...signupInfo})} type="button" value="Submit"/>
		
		</div>
		
	)
}

export default Signup;