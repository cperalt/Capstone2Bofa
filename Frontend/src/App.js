import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Volunteer from "./Pages/VolunteerPage"; 
import Donation from "./Pages/DonationPage";
import Contact from "./Pages/ContactPage";
import Menu from "./Components/Menu";

function App() {
  const [clicked, isClicked] = useState(false);

  return (
    <Router>
      <Navbar clicked={clicked} isClicked={isClicked} />
      {clicked ? <Menu /> : null}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
