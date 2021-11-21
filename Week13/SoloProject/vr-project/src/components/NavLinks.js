import React from "react";

// import {
//   NavBarStyle,
//   LinkStyle,
//   IconImage,
//   ErrorDiv,
//   ErrorLink,
// } from "../styled-components/NavbarStyle";

import brand from "../assets/vr-glasses2.png"
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  IconImage
} from "../styled-components/NavbarStyle";
import {connect} from "react-redux"
// MENU!!!!!

function NavLinks(props) {
  
  const checkLogin = localStorage.getItem("jsonwebtoken")
  return (
   
          <>
             <Nav>
              <NavLogo to="/">
              <IconImage src={brand} alt="" />
              </NavLogo>
              <Bars />
  
              <NavMenu>
              <NavLink to="/" activeStyle>
                    Home
                </NavLink>

                  <NavLink to="/products" activeStyle>
                      Products
                    
                  </NavLink>

                  <NavLink to="/cart" activeStyle>
                      Cart
                  </NavLink>

                  <NavLink to="/contact" activeStyle>
                      Contact
                  </NavLink>

                  <NavLink to="/account" activeStyle>
                     Account
                  </NavLink>

                
                  <NavLink to="/login" activeStyle>
                      Login
                  </NavLink>
                  
                  <NavBtn>
                      <NavBtnLink to="/register">Sign Up</NavBtnLink>                
                  </NavBtn>
              </NavMenu> 
             </Nav> 
          </>
      );
  };
//       <NavBarStyle>
        
//          {props.isLoggedIn ? null : <LinkStyle to="/login">Login</LinkStyle>}

//         {props.isLoggedIn ? <LinkStyle to="/account">Account</LinkStyle>: null}
        
//         <LinkStyle to="/">Home</LinkStyle>

//         <LinkStyle to="/products">Products</LinkStyle>

//         <LinkStyle to="/cart">Cart</LinkStyle>

//         <LinkStyle to="/contact">Contact</LinkStyle>

       

       

//       </NavBarStyle>
  
//   );
// }


const mapStateToProps = (state) => {
	return {
	  isLoggedIn: state.isLoggedIn,
	};
  };

export default connect(mapStateToProps)(NavLinks);
