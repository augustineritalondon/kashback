import './App.css';
import { Routes, Route } from 'react-router-dom'
import {Navbar, Home, Vendor, Footer} from './components/index'



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vendor" element={<Vendor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
