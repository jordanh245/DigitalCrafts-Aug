import React from 'react'
import "./SignUpStyle.css"
import { useMemo } from 'react'
import {useDispatch} from "react-redux"
import debounce  from "lodash.debounce"
export default function SignUpForm() {
	const dispatch = useDispatch() 
	const debounceChangeHandler = useMemo(()=> {
		return debounce(dispatch,300)
	}, [])
	
	return (
		<div>
			<div className="signupform">
			<form action="">
			<input onChange={(e)=> 
				debounceChangeHandler({
						type:"SIGNUPFORM_FIRSTNAME",
						payload: e.target.value
					})
				}
			type="text" placeholder="FirstName" />
			<input onChange={(e)=> 
				debounceChangeHandler({
						type:"SIGNUPFORM_LASTNAME",
						payload: e.target.value
					})
				}type="text" placeholder="LastName" />
			<input onChange={(e)=> 
				debounceChangeHandler({
						type:"SIGNUPFORM_EMAIL",
						payload: e.target.value
					})
				}type="text" placeholder="Email" />
			<input onChange={(e)=> 
				debounceChangeHandler({
						type:"SIGNUPFORM_PASSWORD",
						payload: e.target.value
					})
				}type="text" placeholder="Password" />
			<input type="Submit" />
			</form>
			</div>
		</div>
	)
}
