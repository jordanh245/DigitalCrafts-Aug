import React from "react";
import { SignupArea, SignupInput, SignupButton} from "../styled-components/SignupStyle"

function Signup(props) {
	const {signupInfo, setSignupInfo, signupList, setSignupList} = props;
	// console.log(signupInfo)
	
	return (
		
		
		< SignupArea>
			
		
		
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})} type="text" placeholder = "First Name" name="firstName"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Last Name"name="lastName"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="date" placeholder = "DOB"  name="DOB"/> 
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Address" name="address"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "City" name="city"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "State" name="state"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Zipcode" name="zipcode"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Username" name="username"/>
		<SignupInput onChange={(e)=>setSignupInfo({...signupInfo, [e.target.name]:e.target.value})}type="text" placeholder = "Email" name="email"/>
		<SignupButton onClick={()=>setSignupList([...signupList, signupInfo])}>SUBMIT</SignupButton>
		
		</SignupArea>
		
	)
}

export default Signup;