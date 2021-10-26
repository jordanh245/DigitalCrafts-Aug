import react from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Cart from "./Cart"
import Contact from "./Contact"
import Products from "./Product"
import Error from "./Error";




function navbar() {
	return (
		<div>
			<Router>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/product">Product</Link>
						<Link to="/cart">Cart</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
			<Switch>
			<Route exact path="/">
			<Home/>
			</Route>
			<Route path="/cart">
			<Cart/>
			</Route>
			<Route path="/contact">
			<Contact/>
			</Route>
			<Route path="/product">
			<Products/>
			</Route>
			<Route path="*">
				<Error/>
				<Link to="/">Click here to go to the home page.</Link>
			</Route>
			</Switch>
			</Router>
		</div>
	)
}

export default navbar
