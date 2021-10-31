import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/Cart-actions"
import {CartDivStyle, InfoDivStyle, InfoDivButton} from "../styled-components/CartStyle"

export default function CartPage(props) {
	const dispatch = useDispatch();
	const {product} = props
	
	
	
	return (
		<CartDivStyle>
		
			
			<div>
			<img src={product.image} alt="" width="500px" />
			</div>
			
			<InfoDivStyle>
			<div>{product.brand} {product.name}</div>
				<p> Includes:{product.description}</p>
				<p>{product.pc}</p>
				<p>Price: ${product.price}</p>
			<InfoDivButton onClick={()=> removeFromCart(dispatch, product)}>Remove</InfoDivButton>
			</InfoDivStyle>

			
			
		</CartDivStyle>
	)
}


