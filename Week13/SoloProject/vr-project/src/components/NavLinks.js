import React from "react";
import { NavLink } from "react-router-dom";
import NavbarInfo from "./NavbarInfo";
import {
  NavBarStyle,
  LinkStyle,
  IconImage,
  ErrorDiv,
  ErrorLink,
} from "../styled-components/NavbarStyle";
import {connect} from "react-redux"
// MENU!!!!!!!!!!!

function NavLinks(props) {
  return (
    <div>
      <NavBarStyle>
        <LinkStyle to="/">Home</LinkStyle>

        <LinkStyle to="/products">Products</LinkStyle>

        <LinkStyle to="/cart">Cart</LinkStyle>

        <LinkStyle to="/contact">Contact</LinkStyle>

        <LinkStyle to="/register">Register</LinkStyle>

        <LinkStyle to="/login">Login</LinkStyle>

        {props.isLoggedIn ? <LinkStyle to="/account">Account</LinkStyle> : null}

      </NavBarStyle>
    </div>
  );
}


const mapStateToProps = (state) => {
	return {
	  isLoggedIn: state.isLoggedIn,
	};
  };
  
export default connect(mapStateToProps)(NavLinks);
