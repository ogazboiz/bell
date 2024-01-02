import { Component } from "react";
import logo from '../../assest/Belsoft_Transparent.png';
import "./style.css";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <a href="#">
          <img className="logo-icon" src={logo} alt="Logo" />
        </a>
        
      </div>
    );
  }
}
export default Logo;
