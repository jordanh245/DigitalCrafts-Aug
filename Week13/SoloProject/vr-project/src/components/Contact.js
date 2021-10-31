import React from 'react'
import {FormStyle, LabelStyle, AreaStyle, ButtonStyle, DivStyle, PStyle, EmailabelStyle, MessagelabelStyle, H1Style} from "../styled-components/ContactStyle"
function contact() {
	
	
	
	return (
		<div>
			
			<H1Style>We'd Love to Hear From You</H1Style>
			<PStyle>Whether you have a question about our product, pricing, or anything else, we are standing by ready to help!</PStyle>
			<DivStyle>
			<LabelStyle htmlFor="">First Name</LabelStyle>
			<FormStyle type="text" />
			
			<LabelStyle htmlFor="">Last Name</LabelStyle>
			<FormStyle type="text" />
			
			
			<EmailabelStyle htmlFor="">Email</EmailabelStyle>
			<FormStyle type="text"/>
			
			<MessagelabelStyle htmlFor="">Message</MessagelabelStyle>
			
			
			<div>
			<AreaStyle name="" id="" cols="30" rows="10" ></AreaStyle>
			</div>
			<div>
			<ButtonStyle onClick={()=>{ alert('Message Sent!'); }}>Submit</ButtonStyle>
			</div>
			</DivStyle>
		</div>
	)
}

export default contact
