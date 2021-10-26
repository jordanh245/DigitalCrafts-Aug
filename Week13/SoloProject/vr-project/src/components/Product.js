import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import ProductInfo from "./ProductInfo"

export default function Product() {

	const products = useSelector((state)=> state.Products);	
	// console.log(products.products)	
	

return (
		<div>
			<h1>Product</h1>
			{products.products.map((product)=> (
				<ProductInfo product={product}/>
			))}
			
		</div>
	)
}


