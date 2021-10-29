import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {addToCart} from "../actions/Cart-actions"
import {ProductDivStyle, ProductImgStyle} from "../styled-components/ProductStyle"



export default function ProductInfo(props) {
	// console.log(props)
	const dispatch = useDispatch();
	const {product} = props
	

	
	return (
		<div>
			<div>
				<ProductImgStyle src={product.image} alt="" width="300px" />
			</div>
			
			<ProductDivStyle >
			
			<h1>{product.brand}</h1>
			<h2>{product.name}</h2>
			<p>${product.price}</p>
			<p>{product.size}</p>
			</ProductDivStyle>
			
			<button onClick={()=> addToCart(dispatch, product)}>add to cart</button>
		</div>
	)
}

