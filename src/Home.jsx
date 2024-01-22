import React from "react";
import Services__Short from "./components/Services/Services__Short";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Meettheteam from "./components/MeetTheteam/Meettheteam";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner";
function Home() {
  return (
    <div>
        <Services__Short />
        <Portfolio />
        <Testimonials />
        <News />
        
        <Banner />
    </div>
  );
}

export default Home;
