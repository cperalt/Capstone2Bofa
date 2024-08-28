import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Volunteer from "./pages/VolunterPage"; // Ensure this matches your actual file name
import Donation from "./pages/DonationPage";
import Contact from "./pages/ContactPage";
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
