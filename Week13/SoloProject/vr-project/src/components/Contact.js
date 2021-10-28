import React from 'react'
import {FormStyle, LabelStyle, AreaStyle, ButtonStyle} from "../styled-components/ContactStyle"
function contact() {
	return (
		<div>
			<h1>Contact</h1>
			
			<LabelStyle htmlFor="">First Name</LabelStyle>
			<FormStyle type="text" />
			
			<LabelStyle htmlFor="">Last Name</LabelStyle>
			<FormStyle type="text" placeholder="Last Name"/>
			
			
			<LabelStyle htmlFor="">Email</LabelStyle>
			<FormStyle type="text" placeholder="Email"/>
			
			<LabelStyle htmlFor="">Contact</LabelStyle>
			<div>
			<AreaStyle name="" id="" cols="30" rows="10" placeholder="Reason for Contact"></AreaStyle>
			</div>
			<div>
			<ButtonStyle>Submit</ButtonStyle>
			</div>
		</div>
	)
}

export default contact
