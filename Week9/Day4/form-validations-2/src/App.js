import Form from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MainContainer } from "./styled-components/Appstyle";


function App() {
  return (
    <MainContainer>
      <Header/>
      <Sidebar/>
      <Form/>
    </MainContainer>
  );
}

export default App;
