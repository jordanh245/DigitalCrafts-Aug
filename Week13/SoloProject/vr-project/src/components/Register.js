import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Register() {
	const dispatch = useDispatch()
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const enterForm = (e) => {
		e.perventDefault();
			fetch('http://localhost:3001/register',
			{
				method: 'POST',
				body: JSON.stringify({
					firstname,
					lastname,
					email,
					password
				}),
				
				headers: {
					'Content-type': 'application/json',
				},
				
			})
			.then((res)=> res.json())
		}
	
	return (
		<div>
			<form action="" onSubmit={enterForm}>
		<input type="text" placeholder="firstname"  onChange={(e)=> setFirstName(e.target.value)}/>
		<input type="text" placeholder="lastname"  onChange={(e)=> setLastName(e.target.value)}/>
		<input type="email" placeholder="email"   onChange={(e)=> setEmail(e.target.value)}/>
		<input type="password" placeholder="password"  onChange={(e)=> setPassword(e.target.value)} />
		<button>SUBMIT</button>
			</form>
		</div>
	)

}

