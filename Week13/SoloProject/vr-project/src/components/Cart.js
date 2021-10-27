
import {useSelector} from "react-redux"
import CartPage from './CartPage';
import Total from "./Total";


export default function Cart() {

const cart = useSelector((state) => state.Cart);
	return (
		<div>
			<h1>Cart</h1>
			
			{cart.map((product)=> (
				<CartPage product={product}/>
			))}
			<Total/>
		</div>
	)
}


