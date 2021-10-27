import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {addToCart} from "../actions/Cart-actions"




export default function ProductInfo(props) {
	// console.log(props)
	const dispatch = useDispatch();
	const {product} = props
	

	
	return (
		<div>
			
			<h1>{product.brand}</h1>
			<h2>{product.name}</h2>
			<p>${product.price}</p>
			<p>{product.size}</p>
			<button onClick={()=> addToCart(dispatch, product)}>add to cart</button>
		</div>
	)
}

