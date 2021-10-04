import styled from 'styled-components'

export const Header = styled.h1`
color: black;
text-align: center;
font-size: medium;
color: white;
font-family: 'Inter', sans-serif;

font-weight: 300;

`;


export const Remember = styled.h1`
font-size: 12px;
color: white;
overflow: hidden;
margin-left: 30px;
font-family: 'Inter', sans-serif;
font-weight: 200;

`

export const CheckBox = styled.input`
float: left;
margin-top:9px;
`

export const Forgot = styled.p`
font-family: 'Inter', sans-serif;
color: white;
font-weight: 200;
font-size: 10px;
text-align: center;


`
export const New = styled.p`
font-family: 'Inter', sans-serif;
color: white;
font-weight: 200;
font-size: 10px;
text-align: center;
margin-top: 75px;

`


export const FormBody = styled.div`
grid-area: formcontainer;
display: flex;
justify-self: center;
margin-top: 100px;
width: 220px;
height: 375px;
border: solid black 1px;
background-color:
#132267 ;
align-items: center;
border-radius: 15px;
`;

export const FormForm = styled.form`

width: 100%;
height: 100%;
display: flex;
justify-self: center;
flex-direction: column;
margin-left: 10px;
margin-top: 50px;

`

export const Forminput = styled.input`
display: flex;
justify-self: center;
width: 185px;
height: 25px;
margin-bottom: 10px;
border-radius: 20px;
padding: 5px;


`

export const FormButton = styled.input`
/* margin-left: 25%; */
height: 38px;
width: 200px;
background-color: #4C5270;
color: white;
border-radius: 20px;
background-color: #F66272;
/* margin-top: 30px; */


`