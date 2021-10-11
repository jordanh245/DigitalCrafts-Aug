import styled from 'styled-components'
import {Link} from "react-router-dom"


export const SidebarContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  width: 100%;
  background-color: #034A56;
  
`





export const SidebarNav = styled(Link)`
text-align: center;
  width: 100%;
  height: 2rem;
  color: #efebe0;
  font-size: 19px;
  padding-top: 25px;
  padding-bottom: 25px;
  
`









