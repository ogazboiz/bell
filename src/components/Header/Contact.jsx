import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:lormail@gmail.com">
          <AiFillMail />
          <span>enquiry@belsoftsystems.com</span>
        </a>

        <a href="tel:+212698584458">
          <AiFillPhone />
          <span>+2348068817499</span>
        </a>
      </div>
    );
  }
}

export default Contact;
