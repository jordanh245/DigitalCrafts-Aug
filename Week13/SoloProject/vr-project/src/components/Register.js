
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

		const response = await fetch('http://localhost:3000/register',
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
		<div>
			  <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>REGISTER</h3>
            <p>Please enter your credentials to register.</p>
          </div>
        </div>
        <form onSubmit={submitForm}class="login-form">
		<input type="text" placeholder="First name" name="firstname"value={firstname}  onChange={(e)=> submit(e)}/>
		<input type="text" placeholder="Last name" name="lastname" value={lastname} onChange={(e)=> submit(e)}/>
		<input type="email" placeholder="Email" name="email" value={email}  onChange={(e)=> submit(e)}/>
		<input type="password" placeholder="Password"  name="password" value={password}  onChange={(e)=> submit(e)} />
        <button >SUBMIT</button>
          <p class="message">Already registered? <a href="/login">Login!</a></p>
        </form>
      </div>
    </div>
	</div>

		
		</div>
	)

};

