
import './App.css';
import SignUpForm from './components/SignUpForm';
import {useEffect} from "react"
import {useDispatch} from "react-redux"

function App() {



  useEffect (()=>{
  getWeather()
}, []);
 const getWeather = async () => {
   const data = await fetch("http://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c");
   const json = await data.json();
   console.log(json)
 }
  return (
    <div className="App">
      <SignUpForm/>
    </div>
  );
}

export default App;
