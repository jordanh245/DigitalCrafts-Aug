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
import { useSelector } from "react-redux";

function App() {
  const [viewSidebar, setviewSidebar] = useState(true)
  const register = true
  const user = useSelector((state)=> state.LoginInfo.userData)
  // const user = JSON.parse(localStorage.getItem("supabase.auth.token"))
  console.log(user)
  
  
  return (
    <Router>
    <Switch>
      {user ? (
   <>
  <Route path="/register">
  <Login register={register}/>
  </Route>
  <MainContainer>
  <Header viewSidebar={viewSidebar} setviewSidebar={setviewSidebar}/>
  <Sidebar viewSidebar = {viewSidebar}/>
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
   </MainContainer>
  </>
  ) : (
   <Route path="/login">
      <Login/>
      </Route>
      
      )}
      
    

    

   
   
   </Switch>
    </Router>
  );
}

export default App;
