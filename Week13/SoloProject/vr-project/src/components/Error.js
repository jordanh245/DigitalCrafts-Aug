import React from 'react'
import error from "../assets/error.png"
import {ErrorStyle} from "../styled-components/ErrorStyle"
export default function Error() {
	return (
		<ErrorStyle>
			
			<img src={error} alt=""  width="500px"/>
		</ErrorStyle>
	)
}
