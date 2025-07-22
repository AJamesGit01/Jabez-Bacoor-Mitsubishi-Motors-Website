import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';


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

          </Routes>

          {/* Footer */}
          <Footer />
          
        </main>
      </Router>
    </>
  )
}

export default App;
