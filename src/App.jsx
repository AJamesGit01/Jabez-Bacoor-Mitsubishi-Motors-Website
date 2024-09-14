import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-zinc-950 flex flex-col text-zinc-300 overflow-hidden">
          {/* Navbar */}
          This is the navbar

          {/* Routing */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            Home
          </Routes>

          {/* Footer */}
          Footer

        </main>
      </Router>
    </>
  )
}

export default App
