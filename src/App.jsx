import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './inc/Header'
import Footer from './inc/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Corporate_training from "./pages/Corporate_training";
import Meet_team_acelot from "./pages/Meet_team_acelot";
import Solutions from "./pages/Solutions";
import Privacy_policy from "./pages/Privacy_policy";


function App() {

  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/meet-team-acelot" element={<Meet_team_acelot />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/corporate-training" element={<Corporate_training />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy_policy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
