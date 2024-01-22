import React from "react";
import "./Meettheteam.css";
import Teammembercard from "./Teammembercard";
import testImage from './images/test.jpeg';
import princeImage from './images/prince.png';
import BelbaImage from './images/Belba-Ngoy-CEO_Founder.jpeg'
import Abaleke from './images/Abaleke-Chiedozie-Digital-Marketing-Expert.jpg'
import Abu from './images/Abu David-Fullstack-Developer.jpg'
import chidi from './images/Chidi Nkwocha-Web Developer.jpg'
import Daniel from './images/Daniel-Atang-Johnson-Company Secretary.jpeg'
import Folaranmi from './images/Folaranmi-Israel-FrontEndDeveloper.jpg'
import Godwin from './images/Godwi-Gabriel-Ogazi-Graphics-Designer.jpg'
import taofeek from './images/Taofeek Ajibola Oluwatoba-Product-Designer.jpg'
import victory from './images/Okuobeya Victory Ogheneochuko-Social-Media-Manager_Content-writer.jpg'
// import Queensley from './images/Queensley-Belba-Ngoy-CFO_Director-Marketing&Finance.JPG'
import './style.css'
const teamMembers = [
  { name: "Belba Ngoy", role: "Ceo/founder", email: "Belsoftsystems@gmail.com", image: BelbaImage },
  { name: "Abayomi Aremo", role: "Frontend Developer", email: "abayomiaremo0@gmail.com", image: testImage },
  { name: "Akpolo Prince", role: "Frontend Developer", email: "princeakpolo@gmail.com", image: princeImage },
  { name: "Abaleke Chiedozie", role: "Digital Marketing", email: "Belsoftsystems@gmail.com", image: Abaleke },
  { name: "Abu David", role: "Full Stack developer", email: "Belsoftsystems@gmail.com", image: Abu },
  { name: "Chidi Nkwocha", role: "Web-developer", email: "Belsoftsystems@gmail.com", image: chidi },
  { name: "Daniel Atang", role: "Secretary", email: "Belsoftsystems@gmail.com", image: Daniel },
  { name: "Folaranmi Isreal", role: "Front-End-Dev", email: "Belsoftsystems@gmail.com", image: Folaranmi },
  { name: "Godwin Ogazi", role: "Graphics-Designer", email: "Belsoftsystems@gmail.com", image: Godwin },
  { name: "Okuobeya Victory", role: "social-Media-Manager", email: "Belsoftsystems@gmail.com", image: victory},
  { name: "Taofeek Ajibola", role: "Product-Designer", email: "Belsoftsystems@gmail.com", image: taofeek },
  // { name: "Queensly Belba Ngoy", role: "Marketing&Finance", email: "Belsoftsystems@gmail.com", image: Queensley},
  
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
