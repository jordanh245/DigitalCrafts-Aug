import React, {useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
export default function Register() {
	const dispatch = useDispatch()
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


useEffect(()=> {
	const fetchUserData = async () => {
		const userData = await fetch('http://localhost:3003/readUser')
		const json = await userData.json()
            

		console.log(userData.rows)
		dispatch({type: "LOAD_USER",payload:json.rows});
        
	}
	fetchUserData()
},[])




	
	
	return (
		<div>
			<form action="" >
		<input type="text" placeholder="firstname"  onChange={(e)=> setFirstName(e.target.value)}/>
		<input type="text" placeholder="lastname"  onChange={(e)=> setLastName(e.target.value)}/>
		<input type="email" placeholder="email"   onChange={(e)=> setEmail(e.target.value)}/>
		<input type="password" placeholder="password"  onChange={(e)=> setPassword(e.target.value)} />
		<button>SUBMIT</button>
			</form>
		</div>
	)

}

