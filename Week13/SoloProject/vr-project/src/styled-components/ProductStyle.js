import styled from 'styled-components'

export const ProductDivStyle = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem;
  padding-bottom: 50px;
  border-bottom: 2px lightgray solid;


`
export const ProductImg = styled.img`
@media screen and (min-width: 320px) and (max-width: 480px) {
	width: 400px;
	margin-top: 50px;
}

`
export const ProductH1 = styled.h1`
@media screen and (min-width: 768px) and (max-width: 1024px) {

}
`

export const ProductButtonStyle = styled.button`
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
	}
	
`
export const InfoDiv = styled.div`
font-size: 23px;
margin-top: 100px;
text-align: left;

@media screen and (min-width: 320px) and (max-width: 480px) {
	font-size: 40px;
	width: 500px;
	
}
`
