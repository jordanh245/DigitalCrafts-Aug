import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/Cart-actions"

export default function CartPage(props) {
	const dispatch = useDispatch();
	
	
	
	
	return (
		<div>
			
			<h1>{props.product.brand}</h1>
			<h2>{props.product.name}</h2>
			<p>{props.product.size}</p>
			<p>${props.product.price}</p>
			<button onClick={()=> removeFromCart(dispatch, props.product)}>Remove</button>
			

			
			
		</div>
	)
}


