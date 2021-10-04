import styled from 'styled-components'

export const MainContainer = styled.div`
height: 100vh;
display: grid;
grid-template-areas:
"header header header header"
"sidebar formcontainer formcontainer formcontainer"
"sidebar formcontainer formcontainer formcontainer"
"sidebar footer footer footer";
grid-template-rows: 120px 1fr 50px;
  grid-template-columns: 180px 2fr;
`;