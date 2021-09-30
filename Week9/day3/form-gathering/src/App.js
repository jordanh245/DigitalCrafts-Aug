import React from "react";
import Signup from "./components/Signup"
import DB from "./components/DB"
import {useState} from "react"
function App() {
  
  const [signupInfo, setSignupInfo] = useState('');
  
  
  

  return (
    <div className="App">
      <h1>hello </h1>
      
      <Signup
      signupInfo = {signupInfo} setSignupInfo={setSignupInfo} />
      <DB/>
    </div>
  );
}

export default App;
