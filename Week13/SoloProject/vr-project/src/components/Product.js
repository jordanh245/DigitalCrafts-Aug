
import {productList} from "../actions/Product-action"
import React, {useState, useEffect}from 'react'
import {useSelector, useDispatch} from "react-redux";
import ProductInfo from "./ProductInfo"

export default function Product(props) {
	const dispatch = useDispatch()
	const products = useSelector((state)=> state.Products);	
	 

	

	useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:3000/readProducts')
			const json = await data.json()
            console.log(json)
			dispatch({type: "LOAD_PRODUCTS",payload:json.rows});
        }
        fetchData();
		
    },[]);
		
	
	
	
	
	
	

return (
		<div>
			
			{products?.map((product)=> (
				<ProductInfo product={product}/>
			))}
			
		</div>
	)
}


