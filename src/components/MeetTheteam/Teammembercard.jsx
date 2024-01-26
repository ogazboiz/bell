import React from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Teammembercard = ({ name, role, email, image }) => {
	return (
		<div className="cardTeam">
			<img src={image} alt={name} className="teamMember" />
			<h3>{name}</h3>
			<p className="role">{role}</p>
			<span className="Blueline"></span>
			<p className="cardText">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
				necessitatibus quisquam architecto temporibus et unde sit illum,
				obcaecati totam eius cum illo ut repellendus modi quod atque distinctio
				iusto corrupti numquam! Nam quibusdam officia ea!
			</p>
			<p>
				<span className="teamMemberMail">{email}</span>
			</p>
      <ul className="footer__socials">
            <li>
            <a href="https://www.facebook.com/profile.php?id=61554162863933" target="_blank">
          <AiFillFacebook />
        </a>
            </li>
            <li>
            <a href="https://www.instagram.com/belsoftsystems/" target="_blank">
          <CgInstagram />
        </a>
            </li>
            <li>
            <a href="https://twitter.com/BELSOFT_SYSTEMS" target="_blank">
          <AiFillTwitterSquare />
        </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/company/100826786/admin/feed/posts/?feedType=following" target="_blank">
          <AiFillLinkedin />
        </a>
            </li>
            <li>
            <a href="https://github.com/BELSOFT-SYSTEMS" target="_blank">
          <AiFillGithub />
        </a>
            </li>
          </ul>
		</div>
	);
};

export default Teammembercard;
