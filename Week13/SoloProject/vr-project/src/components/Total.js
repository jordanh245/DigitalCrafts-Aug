import React from 'react'
import { useSelector } from 'react-redux';
export default function Total() {
	const cart = useSelector((state) => state.Cart);
	let total=0;
	let formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: "USD"
	});

	for (const subtotal in cart) {
		total += cart[subtotal].price * cart[subtotal].quantity
	}
	return (
		<div>
			<h1>Total: {formatter.format(total)}</h1>
		<button>Check-Out</button>
			
		</div>
	)
}


