import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarStyle = styled.div`

background-color: #081119;
display: flex;
align-items: center;
padding: 2px;


@media screen and (min-width: 320px) and (max-width: 480px) {
	width: 906PX;
	font-size: 25px;
	
}

`

export const LinkStyle = styled(Link)`
text-decoration: none;
color: white;
width: 10rem;




@media screen and (min-width: 320px) and (max-width: 480px) {
	
}

`
export const IconImage = styled.img`
width: 60px;
margin-left: 10px;
margin-right: 10px;


`
export const ImageDiv = styled.div`


`

