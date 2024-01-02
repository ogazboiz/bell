import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import logo from '../../assest/logo-Icon.png';
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
        <img className="logo" src={logo} alt="Logo" />
          <p className="text">
          Elevate your operations with our tailored software, 
          designed to meet the evolving needs of the modern 
          business landscape. Your success is our priority. 
          Welcome to the future of technology.
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
            <a href="https://twitter.com/BELSOFTSYSTEMS" target="_blank">
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
        <div className="services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT Consultant
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Graphics Design
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Product Design(UI/UX)
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Plot 208 44 Crescent Purple Jucip Und St Setraco/Gishiri, 
                Gwarimpa, Abuja-Nigeria.
              </address>
            </li>
            <li>
              <a href="tel:+212698584458" className="text">
                Tel : +2348068817499, +2347017097447.
              </a>
            </li>
            <li>
              <a href="mailto:lormail@gmail.com" className="text">
                Email: enquiry@belsoftsystems.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
