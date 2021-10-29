import styled from 'styled-components'


export const Image = styled.img`

width: 100%;
height: 1000px;
margin-bottom: -300px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  width: 910px;
  height: 1000px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {}


`
export const ButtonStyle = styled.button`
background: transparent;
color: black;
font-size: 20px;
font-weight: 100;
padding: 10px;
border: 1px solid black ;
text-decoration: none;
display: inline-block;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-49%, 500%);

@media screen and (min-width: 320px) and (max-width: 480px) {
  transform: translate(136%, 580%);
  font-size: 40px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  transform: translate(-49%, 700%);
font-size: 30px;
}

`

export const ImageDiv = styled.div`

position: relative;
text-align: center;
color: white;

`
export const Center = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-52%, -250%);

@media screen and (min-width: 320px) and (max-width: 480px) {
position: absolute;
top: 50%;
left: 40%;
transform: translate(325%, -200%);
}
  
@media screen and (min-width: 768px) and (max-width: 1024px) {

 
transform: translate(-50%, -200%);
  
}
`

export const InfoDiv = styled.div`
margin-bottom: 50px;

@media screen and (min-width: 320px) and (max-width: 480px) {
margin-left: 20px;
width: 870px;

}


`
export const WhoP = styled.p`
text-align: justify;
display: inline-block;
width: 80%;
justify-content: center;
font-size: 20px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  width: 100%;
  padding-bottom: 50px;
  font-size: 35px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  font-size: 25px;

}
`

export const WhoH1 = styled.h1`
text-align: left;
font-size: 50px;
margin-left: 180px;
@media screen and (min-width: 320px) and (max-width: 480px) {
  font-size: 40px;
  margin: -10px;
  padding-bottom: 50px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  margin: 70px;
}
`

export const FooterDiv = styled.div`
height: 20px;
left: 0;
bottom: 0;
width: 100%;
background-color: transparent;
color: black;
text-align: center;

@media screen and (min-width: 320px) and (max-width: 480px) {
 margin-left: 280px;
}


`





export const Social = styled.img`
width: 20px;
padding: 30px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  width: 40px;
}


`

export const SocialP = styled.p`
padding-bottom: 30px;
@media screen and (min-width: 320px) and (max-width: 480px) {
  font-size: 30px;
}


`