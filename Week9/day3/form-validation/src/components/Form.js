import {useState} from "react"
function Form() {

const [signupForm, setsignupForm] = useState({})
	return (
		
		<div>

		<h1>Form</h1>
		<form>
		<input type="text"/>
        <input type="text"/>
		<input type="text"/>
        <input type="button" value= "Submit"/>
		</form>

		</div>
	)}

export default Form;