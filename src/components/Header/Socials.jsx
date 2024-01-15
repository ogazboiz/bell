import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

class Socials extends Component {
  render() {
    return (
      <div className="socials">
        <a href="https://www.instagram.com/belsoftsystems/" target="_blank">
          <CgInstagram />
        </a>
        <a href="https://twitter.com/BELSOFT_SYSTEMS" target="_blank">
          <AiFillTwitterSquare />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554162863933" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.linkedin.com/company/100826786/admin/feed/posts/?feedType=following" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/BELSOFT-SYSTEMS" target="_blank">
          <AiFillGithub />
        </a>
      </div>
    );
  }
}
export default Socials;
