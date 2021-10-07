import React from 'react'
import Plot from 'react-plotly.js';
import {Chartlayout} from "../styled-components/ChartStyle"
export default function Chart() {

	
	return (
	
		<Chartlayout>
			
			<Plot
			data={[
				{
				  x: [1, 2, 3],
				  y: [2, 6, 3],
				  type: 'scatter',
				  mode: 'lines+markers',
				  marker: {color: '#619353'},
				},
				{type: 'bar', x: [1, 2, 3], y: [2, 5, 3],
				marker: {color: '#B6DFDF'}
			
			},
			  ]}
			  layout={{width: 1500, height: 500, title: 'A Fancy Plot'}}/>
		</Chartlayout>
	)
}
