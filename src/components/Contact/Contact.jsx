import React from 'react'
import './styles.css'
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Contact = () => {
  return (
    <div className='all-container'>
        <div className='content-container first-div'>
            <div>
                <h3>Contact Information</h3>
                <p>when you fill out the form, our team will get back to you with in 24 hours. </p>
                <p>Tel : +2348068817499, +2347017097447.</p>
                <p>Email: enquiry@belsoftsystems.com</p>
                <p>Plot 208 44 Crescent Purple Jucip Und St Setraco/Gishiri, Gwarimpa, Abuja-Nigeria.</p>
            </div>
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
        <div className='content-container'>
            <h1>Form</h1>
        </div>
    </div>
  )
}

export default Contact