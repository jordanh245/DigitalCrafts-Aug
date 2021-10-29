import styled from 'styled-components'


export const Image = styled.img`

width: 100%;
height: 1000px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  width: 910px;
  height: 1000px;
  
}



`
// export const ButtonStyle = styled.button`
// background: transparent;
// color: black;
// font-size: 20px;
// font-weight: 100;
// padding: 10px;
// border: 1px solid black ;
// text-decoration: none;
// display: inline-block;
// cursor: pointer;
// text-align: center;`

export const ImageDiv = styled.div`

position: relative;
text-align: center;
color: white;

`
export const Center = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media screen and (min-width: 320px) and (max-width: 480px) {
position: absolute;
top: 50%;
left: 40%;
transform: translate(135%, -50%);

  }

`

export const InfoDiv = styled.div`
margin-top: -300px;

@media screen and (min-width: 320px) and (max-width: 480px) {
margin-top: -350px;
margin-left: 20px;


width: 875px;
font-size: 40px;
text-align: justify;
}
`
