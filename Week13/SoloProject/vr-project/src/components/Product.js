import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import ProductInfo from "./ProductInfo"

export default function Product() {

	const products = useSelector((state)=> state.Products);	
	
	

return (
		<div>
			
			{products.map((product)=> (
				<ProductInfo product={product}/>
			))}
			
		</div>
	)
}


