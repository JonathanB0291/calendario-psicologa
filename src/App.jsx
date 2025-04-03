import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import './App.css'; 




function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
