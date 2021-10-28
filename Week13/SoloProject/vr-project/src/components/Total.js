import React from 'react'
import { useSelector } from 'react-redux';
export default function Total() {
	const cart = useSelector((state) => state.Cart);
	
	return (
		<div>
			<h1>Total: </h1>

			{/* Need to figure out how to get total amount on here */}
		</div>
	)
}


