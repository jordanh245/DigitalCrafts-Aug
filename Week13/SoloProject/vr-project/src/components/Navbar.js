import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBarStyle, LinkStyle, IconImage, ErrorDiv, ErrorLink } from "../styled-components/NavbarStyle"
import Home from "./Home"
import Cart from "./Cart"
import Contact from "./Contact"
import Products from "./Product"
import Error from "./Error";
import brand from "../assets/vr-glasses2.png"



function navbar() {
	return (
		<div>
			<Router>
				<div>
					
					<NavBarStyle>
						<div>
						<IconImage src={brand} alt="" />
						</div>
						<LinkStyle to="/">Home</LinkStyle>
						<LinkStyle to="/product">Product</LinkStyle>
						<LinkStyle to="/cart" >Cart</LinkStyle>
						<LinkStyle to="/contact">Contact</LinkStyle>
					</NavBarStyle>
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
				<ErrorDiv>
				<ErrorLink to="/">Click here to go to the home page.</ErrorLink>
				</ErrorDiv>
			</Route>
			
			</Switch>
			</Router>
		</div>
	)
}

export default navbar
