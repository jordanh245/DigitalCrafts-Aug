import React from 'react'
import {SquareButtons} from '../styled-components/Square-styled'
export default function Square({value, onClick}) {
	return (
		<div>
			<SquareButtons className="square" onClick={onClick}>
				{value}
			</SquareButtons>
		</div>
	)
}
