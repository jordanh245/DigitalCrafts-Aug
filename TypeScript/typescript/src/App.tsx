import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CardContainer from './CardContainer';

function App() {
  const user = {
    firstName: "Wendy",
    lastName: "Spruce",
    username: "wspruce"
  };
  const birthday = "1/12/1980";
  return (
    <div className="App">
     <Header user={user} birthday={birthday}/>
    <CardContainer/>
    </div>
  );
}

export default App;
