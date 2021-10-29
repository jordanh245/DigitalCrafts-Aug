import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/Cart-actions"

export default function CartPage(props) {
	const dispatch = useDispatch();
	const {product} = props
	
	
	
	return (
		<div>
			<div>
			<img src={product.image} alt="" width="300px" />
			</div>
			<h1>{product.brand}</h1>
			<h2>{product.name}</h2>
			<p>{product.size}</p>
			<p>${product.price}</p>
			<button onClick={()=> removeFromCart(dispatch, product)}>Remove</button>
			

			
			
		</div>
	)
}


