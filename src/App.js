import './App.css';
import Navbar from "./components/Navbar";     // <== IMPORT
import CountriesList from "./components/CountriesList";   // <== IMPORT
import CountryDetails from "./components/CountryDetails";         // <== IMPORT

function App() {
  return (
    <div className="App">
   <Navbar />

   <CountryDetails/>
   {/* <CountriesList/> */}
    </div>
  );
}

export default App;
