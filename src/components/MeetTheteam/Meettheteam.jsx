import React from "react";
import "./Meettheteam.css";
import Teammembercard from "./Teammembercard";
import testImage from './test.jpeg';
import princeImage from './prince.png';


const teamMembers = [
  { name: "Abayomi Aremo", role: "Frontend Developer", email: "abayomiaremo0@gmail.com", image: testImage },
  { name: "Akpolo Prince", role: "Frontend Developer", email: "princeakpolo@gmail.com", image: princeImage },
];

const Meettheteam = () => {
  return (
    <section id="meet-the-team">
      <div className="TeamMemberCardContainer">
        <h2>
          <a href="#services">Meet The Team</a>
        </h2>
        <div>
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
