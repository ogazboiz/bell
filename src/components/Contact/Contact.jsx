import React, { useState } from "react";
import ContactInput from "./ContactInput";
import "./styles.css";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
	// const [contact, setContact] = useState("");

	// const handleContactChange = (newContact) => {
	// 	setContact(newContact);
	// };
	return (
		<div className="all-container">
			<div className="content-container first-div">
				<div>
					<div className="contactinfodiv">
						<p>
							{" "}
							<FaPhone className="contacticons" /> Tel : +2348068817499,
							+2347017097447.
						</p>
					</div>
					<div className="contactinfodiv">
						<p>
							{" "}
							<IoIosMail className="contacticons" /> Email:
							enquiry@belsoftsystems.com
						</p>
					</div>
					<div className="contactinfodiv">
						<p>
							<FaLocationDot className="contacticons" />
							Plot 208 44 Crescent Purple Jucip Und St Setraco/Gishiri,
							Gwarimpa, Abuja-Nigeria.
						</p>
					</div>
				</div>
				<ul className="footer__socials">
					<li>
						<a
							href="https://www.facebook.com/profile.php?id=61554162863933"
							target="_blank">
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
						<a
							href="https://www.linkedin.com/company/100826786/admin/feed/posts/?feedType=following"
							target="_blank">
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
			<div className="content-container">
				<h3>Contact Us </h3>
				<p className="text">
					you can get in touch with us by filling this form or emailing us
					directly
				</p>
				<ContactInput />
			</div>
		</div>
	);
};

export default Contact;
