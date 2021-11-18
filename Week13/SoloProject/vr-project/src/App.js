
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarInfo from './components/NavbarInfo';

import Home from "../src/components/Home"
import Cart from "../src/components/Cart"
import Contact from "../src/components/Contact"
import Products from "../src/components/Product"
// import Error from "./Error";
// import brand from "../assets/vr-glasses2.png"
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import Account from "../src/components/Account";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarInfo>
        <Switch>
          <Route exact path = "/login" component ={Login}/>
          <Route exact path = "/account" component ={Account}/>
         
          
          <Route exact path = "/" component ={Home}/>
          <Route exact path = "/cart" component ={Cart}/>
          <Route exact path = "/contact" component ={Contact}/>
          <Route exact path = "/products" component ={Products}/>
          <Route exact path = "/register" component ={Register}/>
          
        </Switch>
        </NavbarInfo>
      </BrowserRouter>
    </div>
  );
}

export default App;
