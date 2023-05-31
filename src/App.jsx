import Calculator from "./Components/Calculator/Calculator";
import './App.css'
import TableComponent from "./Components/Table/Table";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import PlazoFijoSimulador from "./Components/Simulator/Simulator";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Calculator/>}/>
      <Route path="/history" element={<TableComponent/>} />
      <Route path="/simulator" element={<PlazoFijoSimulador/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
