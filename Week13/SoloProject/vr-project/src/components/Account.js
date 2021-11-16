import React, { useEffect, useState } from 'react'
import User from "./User";
function Account() {
	const [accountInfo, setAccountInfo] = useState([]);

	useEffect(() => {
		viewAccount();
	},[]);

	const viewAccount = async () => {
		const token = localStorage.getItem("jsonwebtoken");
		
		const viewAccount = await fetch(
			"http://localhost:3000/account/:email",
			{
				method:"GET",
				headers: {
					// "Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
			}
		);
	
	const getAccounts = await viewAccount.json();
	setAccountInfo(getAccounts.rows);
	};
	return (
		<div>
			{accountInfo?.map((account)=> (
				<User
				account={account}
				/>
			))}
			
			
		</div>
	)
}

export default Account
