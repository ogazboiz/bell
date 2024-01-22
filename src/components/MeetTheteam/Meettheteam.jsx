import React from "react";
import "./Meettheteam.css";
import Teammembercard from "./Teammembercard";
import testImage from './images/test.jpeg';
import princeImage from './images/prince.png';
import BelbaImage from './images/Belba-Ngoy-CEO_Founder.jpeg'
import Abaleke from './images/Abaleke-Chiedozie-Digital-Marketing-Expert.jpg'
import Abu from './images/Abu David-Fullstack-Developer.jpg'
import chidi from './images/Chidi Nkwocha-Web Developer.jpg'
import './style.css'
const teamMembers = [
  { name: "Belba Ngoy", role: "Ceo/founder", email: "Belsoftsystems@gmail.com", image: BelbaImage },
  { name: "Abayomi Aremo", role: "Frontend Developer", email: "abayomiaremo0@gmail.com", image: testImage },
  { name: "Akpolo Prince", role: "Frontend Developer", email: "princeakpolo@gmail.com", image: princeImage },
  { name: "Abaleke Chiedozie", role: "Digital Marketing", email: "Belsoftsystems@gmail.com", image: Abaleke },
  { name: "Abu David", role: "Full Stack developer", email: "Belsoftsystems@gmail.com", image: Abu },
  { name: "Chidi Nkwocha", role: "Web-developer", email: "Belsoftsystems@gmail.com", image: chidi },
  
];

const Meettheteam = () => {
  return (
    <section id="meet-the-team">
      <div className="TeamMemberCardContainer">
        <h2>
          <a href="#services">Meet The Team</a>
        </h2>
        <div className="team-card-container">
          {teamMembers.map((member, index) => (
            <Teammembercard
              key={index}
              name={member.name}
              role={member.role}
              email={member.email}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meettheteam;
