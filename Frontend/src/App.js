import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import Volunteer from "./Pages/VolunterPage";
import Donation from "./Pages/DonationPage";
import Contact from "./Pages/ContactPage";
import MobileNavbar from "../src/Components/MobileNavbar";

function App() {
  const [clicked, isClicked] = useState(false);

  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunter" element={<Volunteer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
