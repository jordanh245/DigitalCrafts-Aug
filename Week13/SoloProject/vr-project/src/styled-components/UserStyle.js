import styled from "styled-components";

export const UserDiv = styled.div`


display: grid;
  grid-template-columns: 250px 2fr;
  padding-bottom: 50px;
  height: 928px;
  text-align: justify;
  padding-left: 100px;
  padding-right: 100px;
 
`;

export const UserDivLeft = styled.div`
  background-color: #211e1f;
  color: white;
  height: 400px;
  margin-top: 100px;
  padding: 10px;
 

`;

export const UserDivRight = styled.div`
  background-color: #292727;
  color: white;
  height: 400px;
  margin-top: 100px;
  padding: 10px;
`;


export const AccountDiv = styled.div`
background-color: #F5F5F5;
`

export const LogoutButtonStyle = styled.button`
box-shadow: 3px 4px 0px 0px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border:1px solid #29668f;
	color:#ffffff;
	font-size:15px;
	padding:7px 50px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;;
	margin-top: 10px;
	float: right;
	&:hover {
	background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	background-color:#408c99;
	}
	&	:active {
	position:relative;
	top:1px;
	}
	@media screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 40px;
	}`

export const ButtonDiv = styled.div`
margin-top: 100px;
margin-right: 100px;
`

