import { Component } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Quote from "./Quote";
import Search from "./Search";
import "./style.css";
class Nav extends Component {
  render() {
    return (
      <nav className="nav_container">
        <div className="container container__nav">
          <Logo />
          <Links />
          <Quote className="quote" />
          <Search />
        </div>
      </nav>
    );
  }
}
export default Nav;
