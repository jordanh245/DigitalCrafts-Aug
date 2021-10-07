import Dealership from "./components/Dealership/Dealership"
import Neighborhood from "./components/Neighborhood/Neighborhood"
import "./App.css"

function App() {
  const mustang = "1967 Mustang boss 302"
  return (
    <div className="box">
      <h1>props drilling</h1>
      <Neighborhood mustang={mustang}/>
      <Dealership mustang={mustang}/>
    </div>
  );
}

export default App;
