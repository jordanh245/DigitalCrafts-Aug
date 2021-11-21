// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// export const NavBarStyle = styled.div`

// background-color: #081119;
// display: flex;
// align-items: center;
// padding: 2px;


// @media screen and (min-width: 320px) and (max-width: 480px) {
// 	width: 906PX;
// 	font-size: 45px;
	
// }

// `

// export const LinkStyle = styled(Link)`
// text-decoration: none;
// color: white;
// width: 10rem;




// `

// export const ErrorLink = styled(Link)`
// font-size: 50px;
// text-decoration: none;
// color: black;

// @media screen and (min-width: 320px) and (max-width: 480px) {
	
// 	margin-left: 100px;
// }

// `


// export const ErrorDiv = styled.div`
// @media screen and (min-width: 320px) and (max-width: 480px) {
	
// 	width: 800px;
// }



// `
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #071018;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:black;
}
&:hover {
  color: black;
}
`;
export const IconImage = styled.img`
width: 60px;
margin-left: 10px;
margin-right: 10px;

@media screen and (min-width: 320px) and (max-width: 480px) {
width: 100px;}

`
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
