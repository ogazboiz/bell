// Meettheteam.jsx

import React from "react";
import "./Meettheteam.css";
import Teammembercard from "./Teammembercard";
import BelbaImage from './images/Belba-Ngoy-CEO_Founder.jpeg';
import testImage from './images/test.jpeg';
import princeImage from './images/prince.png';
import Abaleke from './images/Abaleke-Chiedozie-Digital-Marketing-Expert.jpg';
import Abu from './images/Abu David-Fullstack-Developer.jpg';
import chidi from './images/Chidi Nkwocha-Web Developer.jpg';
import Daniel from './images/Daniel-Atang-Johnson-Company Secretary.jpeg';
import Folaranmi from './images/Folaranmi-Israel-FrontEndDeveloper.jpg';
import Godwin from './images/Godwi-Gabriel-Ogazi-Graphics-Designer.jpg';
import taofeek from './images/Taofeek Ajibola Oluwatoba-Product-Designer.jpg';
import victory from './images/Okuobeya Victory Ogheneochuko-Social-Media-Manager_Content-writer.jpg';

const teamMembers = [
  { name: "Belba Ngoy", position: "CEO/founder", role: "Ceo/founder", email: "Belsoftsystems@gmail.com", image: BelbaImage },
  { name: "Abayomi Aremo", position: "developer", role: "Frontend Developer", email: "abayomiaremo0@gmail.com", image: testImage },
  { name: "Akpolo Prince", position: "developer", role: "Frontend Developer", email: "princeakpolo@gmail.com", image: princeImage },
  { name: "Abaleke Chiedozie", position: "Digital Marketing Expert", role: "Digital Marketing", email: "Belsoftsystems@gmail.com", image: Abaleke },
  { name: "Abu David", position: "developer", role: "Full Stack developer", email: "Belsoftsystems@gmail.com", image: Abu },
  { name: "Chidi Nkwocha", position: "developer", role: "Web-developer", email: "Belsoftsystems@gmail.com", image: chidi },
  { name: "Daniel Atang", position: "Secretary", role: "Secretary", email: "Belsoftsystems@gmail.com", image: Daniel },
  { name: "Folaranmi Isreal", position: "developer", role: "Front-End-Dev", email: "Belsoftsystems@gmail.com", image: Folaranmi },
  { name: "Godwin Ogazi", position: "developer", role: "Graphics-Designer", email: "Belsoftsystems@gmail.com", image: Godwin },
  { name: "Okuobeya Victory", position: "social-Media-Manager", role: "social-Media-Manager", email: "Belsoftsystems@gmail.com", image: victory },
  { name: "Taofeek Ajibola", position: "Product-Designer", role: "Product-Designer", email: "Belsoftsystems@gmail.com", image: taofeek },
];

const Meettheteam = () => {
  return (
    <section id="meet-the-team">
      <div className="TeamMemberCardContainer">
        <h2>
          <a href="#services">Meet The Team</a>
        </h2>
        <div className="team-group">
          <h3>CEO</h3>
          <div className="team-card-container">
            {teamMembers.filter(member => member.position === 'CEO/founder').map((member, index) => (
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
        <div className="team-group">
          <h3>Developers</h3>
          <div className="team-card-container">
            {teamMembers.filter(member => member.position === 'developer').map((member, index) => (
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
        <div className="team-group">
          <h3>Marketers</h3>
          <div className="team-card-container">
            {teamMembers.filter(member => member.position === 'Digital Marketing Expert').map((member, index) => (
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
      </div>
    </section>
  );
};

export default Meettheteam;