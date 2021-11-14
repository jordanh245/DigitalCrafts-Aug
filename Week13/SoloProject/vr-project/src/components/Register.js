
import React, {useState, useEffect} from 'react'

import { useDispatch } from 'react-redux'
export default function Register() {
	


const [information, setInformation] = useState({
	firstname: '',
	lastname: '',
	email: '',
	password: '',
});

const {
	firstname,
	lastname,
	email,
	password
} = information;

const submit = (e) => {
	setInformation({
		...information,
		[e.target.name]: e.target.value
	});
};

const submitForm = async (e) => {
	e.preventDefault();
	try{
		const body = {
			firstname,
			lastname,
			email,
			password
		};

		const response = await fetch('http://localhost:3002/register',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body)
		
		
		}
		);

	} catch (err) {
		console.error(err.message);
	}
	
};
	
	
	
	
	return (
		<div>
			<form onSubmit={submitForm}>
		<input type="text" placeholder="firstname" name="firstname"value={firstname}  onChange={(e)=> submit(e)}/>
		<input type="text" placeholder="lastname" name="lastname" value={lastname} onChange={(e)=> submit(e)}/>
		<input type="email" placeholder="email" name="email" value={email}  onChange={(e)=> submit(e)}/>
		<input type="password" placeholder="password"  name="password" value={password}  onChange={(e)=> submit(e)} />
		<button >SUBMIT</button>
			</form>
		</div>
	)

};

