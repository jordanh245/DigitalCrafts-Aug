import React, {useState} from 'react'

export default function Form() {
	const [formData, setFormData] = useState({});
	return (
		<div>
			<h1>From</h1>
			<form action="">
				<input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="Username" name="Username" value={formData?.Username}/>
				<input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})}type="text" placeholder="Email" name="Email" value={formData?.Email}/>
				<input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})}type="password" placeholder="Password" name="Password" value={formData?.Password}/>
				<div>
				<input type="submit" />
				</div>
			</form>
		</div>
	)
}
