import { Component } from "react";
import logo from '../../assest/Belsoft_Transparent.png';
import "./style.css";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logo-icon" src={logo} alt="Logo" />
      </div>
    );
  }
}
export default Logo;
