import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from "./pages/home/about/About"; 
import Cars from './pages/home/cars/Cars'; 
import Services from './pages/home/services/Services'; 
import Agents from './pages/home/agents/Agents'; 
import Events from "./pages/home/events/Events";
import Blogs from './pages/home/blog/Blogs';
import Contacts from './pages/home/contacts/Contacts'; 
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-300 overflow-hidden">
        <Navbar />
        <div className="flex-grow pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
