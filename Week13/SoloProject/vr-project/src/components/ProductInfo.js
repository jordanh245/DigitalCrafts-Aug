import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {addToCart, } from "../actions/Cart-actions"
import {ProductDivStyle, ProductButtonStyle, PageDiv, InfoDiv, ProductImg, ProductH1} from "../styled-components/ProductStyle"





export default function ProductInfo(props) {
	
	const dispatch = useDispatch();
	const {product} = props
	

	
	return (
	
		
		<ProductDivStyle>
			<div>
				<ProductImg src={product.image} alt="" width="500px" />
				<p>{product.size}</p>
			</div>
			<InfoDiv>
				<ProductH1>{product.brand} {product.name}</ProductH1>
				<p> Includes:{product.description}</p>
				<p>{product.pc}</p>
				<p>Price: ${product.price}</p>
	
			<ProductButtonStyle onClick={()=> addToCart(dispatch, product)} >ADD TO CART</ProductButtonStyle>
			</InfoDiv>
			
			
		</ProductDivStyle>
		
	)
}

