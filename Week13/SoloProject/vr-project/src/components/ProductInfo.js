import React from 'react'
import {useSelector} from "react-redux";





export default function ProductInfo(props) {
	console.log(props)
	
	
	return (
		<div>
			
			<h2>{props.product.brand}</h2>
			<h2>{props.product.name}</h2>
			<h2>${props.product.price}</h2>
			<h2>{props.product.size}</h2>
		</div>
	)
}

