
import React, { useState } from 'react'
import Account from './Account';



export default function Login() {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	const userData = {
	  email,
	  password,
	};

	return (
		<div>
			
			<input type="text" name="email"  placeholder="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
			<input type="text" name="password" placeholder="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
			<button>SUBMIT</button>
			
		</div>
	)
	}


