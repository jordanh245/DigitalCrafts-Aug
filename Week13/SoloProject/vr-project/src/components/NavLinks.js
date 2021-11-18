import React from "react";

import {
  NavBarStyle,
  LinkStyle,
  IconImage,
  ErrorDiv,
  ErrorLink,
} from "../styled-components/NavbarStyle";
import {connect} from "react-redux"
// MENU!!!!!

function NavLinks(props) {
  
  const checkLogin = localStorage.getItem("jsonwebtoken")
  return (
   
      <NavBarStyle>
        
         {props.isLoggedIn ? null : <div><LinkStyle to="/login">Login</LinkStyle></div>}

        {props.isLoggedIn ? <div><LinkStyle to="/account">Account</LinkStyle></div>: null}
        
        <LinkStyle to="/">Home</LinkStyle>

        <LinkStyle to="/products">Products</LinkStyle>

        <LinkStyle to="/cart">Cart</LinkStyle>

        <LinkStyle to="/contact">Contact</LinkStyle>

       

       

      </NavBarStyle>
  
  );
}


const mapStateToProps = (state) => {
	return {
	  isLoggedIn: state.isLoggedIn,
	};
  };

export default connect(mapStateToProps)(NavLinks);
