import React from 'react'
import { TotalH1, TotalButtonDiv, TotalButton} from "../styled-components/TotalStyle"
import { useSelector } from 'react-redux';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Styles
import Checkout from "../components/Checkout"

const stripePromise = loadStripe('pk_test_51Jvn4JK9lSkN4Pbd01nuPW8nWnecj1PE9h2uApHKviNEpL3c1K9fDezkOC3KidOucoa5ROS0JosmfEOGjmKSQi9y00xZqQGwlB');



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
	
		
		
		<Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
		
		</div>
	)
}


