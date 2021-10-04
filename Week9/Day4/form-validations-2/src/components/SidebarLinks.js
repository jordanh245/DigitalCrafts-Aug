import React from 'react'
import { SidebarNav } from "../styled-components/SidebarStyle"
export default function SidebarLinks(props) {
	return (
		<>
			<SidebarNav to={props.linkData.path}>{props.linkData.name}</SidebarNav>
		</>
	);
}
