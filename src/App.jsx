import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./inc/ScrollToTop";

import Header from './inc/Header'
import Footer from './inc/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Corporate_training from "./pages/Corporate_training";
import Meet_team_acelot from "./pages/Meet_team_acelot";
import Solutions from "./pages/Solutions";
import Privacy_policy from "./pages/Privacy_policy";
import Login from "./pages/Login";
import Select_instance from "./pages/Select_instance";
import Lms from "./pages/Lms";


function App() {

  return (
    <>
        <BrowserRouter>
          <ScrollToTop /> 
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/meet-team-acelot" element={<Meet_team_acelot />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/corporate-training" element={<Corporate_training />} />
            <Route path="/lms-platform" element={<Lms />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy_policy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/select-instance" element={<Select_instance />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
