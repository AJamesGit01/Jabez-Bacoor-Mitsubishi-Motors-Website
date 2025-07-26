import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from "./pages/home/about/About"; // adjust path based on file structure
import Cars from './pages/home/cars/Cars'; // adjust path based on file structure
import Services from './pages/home/services/Services'; // adjust path based on file structure
import Inventory from './pages/home/search/Search'; // adjust path based on file structure


import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-zinc-950 flex flex-col text-zinc-300 overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/inventory" element={<Inventory />} />
            {/* Add more routes as needed */}
          </Routes>

          {/* Footer */}
          <Footer />
          
        </main>
      </Router>
    </>
  )
}

export default App;
