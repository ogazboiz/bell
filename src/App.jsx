// import { Component } from "react";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
// import About from "./components/About/About";
// import Services__Short from "./components/Services/Services__Short";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonials from "./components/Testimonials/Testimonials";
import Meettheteam from "./components/MeetTheteam/Meettheteam";
// import News from "./components/News/News";
// import Banner from "./components/Banner/Banner";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./components/Footer/Footer";
function App() {
  return (
          <BrowserRouter>
        <div>
          <Header />
          <Nav />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meet-the-team" element = {<Meettheteam />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element ={<Contact/>} />
            <Route path="/services" element= {<Services />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }


export default App;
