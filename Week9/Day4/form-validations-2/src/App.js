import "./app.css"
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage"
import Garage from "./components/Garage"
import Account from "./components/Account"


import { MainContainer } from "./styled-components/Appstyle";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {useState} from "react"

function App() {
  const [viewSidebar, setviewSidebar] = useState(true)
  return (
    <Router>
    <Switch>
   
    <MainContainer>
      <Header viewSidebar={viewSidebar} setviewSidebar={setviewSidebar}/>
      <Sidebar viewSidebar = {viewSidebar}/>
      
      <Route path="/login">
      <Login/>
      </Route>
      
      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/dashboard">
    <Dashboard/>
    </Route>

    <Route path="/account">
    <Account/>
    </Route>
   
    <Route path="/garage">
    <Garage/>
    </Route>

    <Route path="*">
      <Redirect to="/errorpage"/> 
    </Route>
    <Route path="/errorpage">
      <ErrorPage/>
    </Route>

    

    </MainContainer>
   
   </Switch>
    </Router>
  );
}

export default App;
