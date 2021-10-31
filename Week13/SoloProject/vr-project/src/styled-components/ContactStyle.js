import styled from 'styled-components'

export const FormStyle = styled.input`


padding: 10px;
margin: 10px;
width: 286px;
border-radius: 5px;
border: 1px solid black;
@media screen and (min-width: 320px) and (max-width: 480px) {
	width: 450px;
	padding: 30px;
}


`
export const AreaStyle = styled.textarea`
width: 300px;
border-radius: 5px;
border: 1px solid black;
margin-top: 5px;
@media screen and (min-width: 320px) and (max-width: 480px) {
	width: 500px;
	height: 300px;
}
`
export const LabelStyle = styled.label`

display: block;
margin-right: 230px;
color: white;
margin-top: 10px;
@media screen and (min-width: 320px) and (max-width: 480px) {
	font-size: 40px;
	margin-left: -100px;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
 font-size: 20px;
	margin-left: 10px;
}

`

export const ButtonStyle = styled.button`
	
	box-shadow: 3px 4px 0px 0px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border:1px solid #29668f;
	color:#ffffff;
	font-size:15px;
	padding:10px 128px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;;
	margin-top: 10px;
	margin-bottom: 30px;
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
	padding:10px 190px;
	margin-top: 50px;
	
	}
`

export const EmailabelStyle = styled.label`
display: block;
padding-bottom: 5px;
margin-right: 260px;
color: white;
@media screen and (min-width: 320px) and (max-width: 480px) {
	font-size: 40px;
	margin-left: -150px;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
 font-size: 20px;
 
}
`
export const DivStyle = styled.div`

background-color: black;
display: inline-block;
width: 500px;
border-radius: 10px;
@media screen and (min-width: 320px) and (max-width: 480px) {
	margin-left: 100px;
	height: 1000px;
	width: 700px;
}
`
export const PStyle = styled.p`
color: gray;
@media screen and (min-width: 320px) and (max-width: 480px) {
	font-size: 50px;
	width: 800px;
	text-align: justify;
	margin-left: 50px;
}
`
export const MessagelabelStyle = styled.label`
display: block;
padding-bottom: 5px;
margin-right: 260px;
color: white;
font-size: 40px;

@media screen and (min-width: 320px) and (max-width: 480px) {
	margin-left: -110px;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
 font-size: 20px;
	margin-left: 20px;
}
`
export const H1Style = styled.h1`

@media screen and (min-width: 320px) and (max-width: 480px) {
	font-size: 50px;
width: 700px;
margin-left: 110px;
}
`


