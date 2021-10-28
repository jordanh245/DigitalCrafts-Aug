import React from 'react'
import {FormStyle, LabelStyle, AreaStyle, ButtonStyle, DivStyle} from "../styled-components/ContactStyle"
function contact() {
	
	
	
	return (
		<div>
			<DivStyle>
			<h1>Contact</h1>
			
			<LabelStyle htmlFor="">First Name</LabelStyle>
			<FormStyle type="text" />
			
			<LabelStyle htmlFor="">Last Name</LabelStyle>
			<FormStyle type="text" />
			
			
			<LabelStyle htmlFor="">Email</LabelStyle>
			<FormStyle type="text"/>
			
			<LabelStyle htmlFor="">Message</LabelStyle>
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
