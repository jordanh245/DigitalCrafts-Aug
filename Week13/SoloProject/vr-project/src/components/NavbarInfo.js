

// BASE LAYOUT!!!!!!!!

import React from "react";
import { connect } from "react-redux";
import NavLinks from "./NavLinks";


function NavbarInfo(props) {
  return (
    <div>
      
	  <NavLinks/>
	  
	  {props.children}
    </div>
  );
}


export default NavbarInfo;
