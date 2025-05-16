import { useEffect } from "react";

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
import Onboarding_training from "./pages/Onboarding_training";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Compliance_training from "./pages/Compliance_training";
import Sales_traning from "./pages/Sales_traning";
import Remote_workforce_training from "./pages/Remote_workforce_training";


import BackToTop from './inc/BackToTop';
import Blog from "./pages/Blog";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
        <BrowserRouter>
          <ScrollToTop /> 
          <BackToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/meet-team-acelot" element={<Meet_team_acelot />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/lms-platform" element={<Lms />} />
            <Route path="/corporate-training" element={<Corporate_training />} />


            <Route path="/onboarding-training" element={<Onboarding_training />} />
            <Route path="/sales-training" element={<Sales_traning />} />
            <Route path="/compliance-training" element={<Compliance_training />} />
            <Route path="/remote-workforce-training" element={<Remote_workforce_training />} />
            




            <Route path="/blog" element={<Blog />} />

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
