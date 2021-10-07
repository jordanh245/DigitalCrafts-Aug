import React from 'react'
import Chart from './Chart'
import Orders from './Orders'
import {Dashlayout, DashHeader} from "../styled-components/DashboardStyle"
export default function Dashboard() {
	
	
	return (
		<Dashlayout>
			<DashHeader>Dashboard</DashHeader>
			<Chart/>
			<Orders/>
		</Dashlayout>
	)
}
