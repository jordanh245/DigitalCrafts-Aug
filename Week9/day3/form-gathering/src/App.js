import React from "react";
import Signup from "./components/Signup"
import DB from "./components/DB"
import {useState} from "react"
import "./App.css"
// import { InfoContainer } from "./styled-components/AppStyles"

import {CompleteContainer, SignupHead} from "./styled-components/SignupStyle"
function App() {
  
  const [signupInfo, setSignupInfo] = useState({});
  const [signupList, setSignupList] = useState([]);
  const info = signupList
  console.log(info)

  return (
    <CompleteContainer>
      
      <div>
       <SignupHead>Sign up </SignupHead> 
      <Signup
      signupInfo = {signupInfo} setSignupInfo={setSignupInfo}  signupList={signupList} setSignupList={setSignupList}/>
     </div>
     
     
     <div>
       
      {info.map((user)=> (
        <DB info={user}/>
      ))}</div>
       
      
      
    </CompleteContainer>
  
  );
}  

export default App;
