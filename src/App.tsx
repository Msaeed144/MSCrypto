import { Routes , Route } from "react-router-dom";

import { CryptosProvider } from "./context/CryptoContext";

import Home from "./pages/Home";
import Changer from "./pages/Changer";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {

  return (
    <CryptosProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformer" element={<Changer />} />
        <Route path="/aboutus" element={<About />} /> 
      </Routes>
    </CryptosProvider>
  )
}

export default App
