import React from 'react'
import {ButtonStyle, Image, ImageDiv, Center, InfoDiv, WhoH1, WhoP, FooterDiv, Social, SocialP} from "../styled-components/HomeStyle"
import {Link } from 'react-router-dom'
import social from "../assets/twitter (2).png"

import social3 from "../assets/instagram.png"
import background1 from "../assets/background1.png"



export default function home() {
	
	
	
	
	
	return (
		<div>
			
			<ImageDiv>
				
				<Image src={background1} alt=""/>
				<Center>
				
				<h1>Brand </h1></Center>
				
			</ImageDiv>
			
			
			<div>
			<Link to="/product">
    		<ButtonStyle type="button">Explore</ButtonStyle>
 			</Link>
			</div>
			
			<InfoDiv>
			<WhoH1>Who are we?</WhoH1>
			<WhoP>We are (brand) and we sell Virtual Reality Headsets! The community here at (brand )are committed to providing a quality user experience and customer service.</WhoP>
			

			
				<WhoH1>What is Virtual Reality? </WhoH1>
				<WhoP>VR is the use of computer technology to create a simulated environment. Once you put on one of our headsets you will be transported to many worlds providing an immersive experience. Our headsets come in a wide range of specs and price.</WhoP>
			</InfoDiv>


			<FooterDiv>
				
				<a href="https://twitter.com/?lang=en">
				<Social src={social} alt="" />
				</a>
				<a href="https://www.instagram.com/">
				<Social src={social3} alt="" />
				</a>
				
				<SocialP>Brand @2021</SocialP>
			</FooterDiv>




		</div>
	)
}


