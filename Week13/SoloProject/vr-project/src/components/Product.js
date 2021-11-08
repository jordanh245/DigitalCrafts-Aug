
import {productList} from "../actions/Product-action"
import React, {useState, useEffect}from 'react'
import {useSelector, useDispatch} from "react-redux";
import ProductInfo from "./ProductInfo"

export default function Product() {
	const dispatch = useDispatch()
	const products = useSelector((state)=> state.Products);	
	 

	

	useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:3001/readProducts')
			.then(res => res.json());
            
			console.log(data.rows);
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


