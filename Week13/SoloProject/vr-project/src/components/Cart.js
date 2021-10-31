
import {useSelector} from "react-redux"
import CartPage from './CartPage';
import Total from "./Total";
import CartImage from "../assets/cart.png"
import {Media} from "../styled-components/CartStyle"

export default function Cart() {

const cart = useSelector((state) => state.Cart);
	return (
		<div>
			
			{cart.length !== 0 ? (
			cart.map((product)=> (
				<CartPage product={product}/>
			))
			): (
				<Media src={CartImage} alt=""  width="600px"/>
			
	
	)}		
	
	
	<Total/>
		</div>
	)
}


