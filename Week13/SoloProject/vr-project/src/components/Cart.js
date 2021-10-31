
import {useSelector} from "react-redux"
import CartPage from './CartPage';
import Total from "./Total";
import CartImage from "../assets/cart.png"

export default function Cart() {

const cart = useSelector((state) => state.Cart);
	return (
		<div>
			<h1>Cart</h1>
			{cart.length !== 0 ? (
			cart.map((product)=> (
				<CartPage product={product}/>
			))
			): (
				<img src={CartImage} alt=""  width="600px"/>
			
	
	)}		
	
	
	<Total/>
		</div>
	)
}


