import styled from "styled-components";


export const CompleteContainer = styled.div`
display: grid;

grid-template-columns: 1fr 1fr;

font-family: 'Inter', sans-serif;;
font-weight: normal;
height: 100vh;
background-color: whitesmoke;
justify-content: center;

`


export const SignupArea = styled.div`
display: grid;
justify-content: center;
align-items: center;



`
export const SignupHead = styled.h1`
font-family: 'Inter', sans-serif;;
font-weight: normal;

`

export const SignupInput = styled.input`
width: 200px;
padding: 10px;
margin-bottom: 10px;
font-family: 'Inter', sans-serif;;
font-weight: normal;
border-top: none;
border-left: none;
border-right: none;
background-color: whitesmoke;

`

export const SignupButton = styled.button `
width: 220px;
height: 2rem;
background-color: #202833;
color: whitesmoke;


`