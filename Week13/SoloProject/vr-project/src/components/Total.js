import React from 'react'
import { TotalH1, TotalButtonDiv, TotalButton} from "../styled-components/TotalStyle"
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


			<TotalH1>Total: {formatter.format(total)}</TotalH1>
			
		<TotalButtonDiv>
		<TotalButton>Check-Out</TotalButton>
		</TotalButtonDiv>	
		</div>
	)
}


