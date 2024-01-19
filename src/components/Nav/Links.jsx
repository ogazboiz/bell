import { Component } from "react";
import { RiMenu3Line } from "react-icons/ri";
class Links extends Component {
  constructor() {
    super();
    this.links = [
      "home",
      "about",
      "services",
      "portfolio",
      "testimony",
      "meet the team",
      "contact"
    ];
    this.state = {
      linksVisibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((lastState) => {
      return {
        linksVisibility: !this.state.linksVisibility
      };
    });
  }

  render() {
    return (
      <>
        <div className="links__button hide__button">
          <button className="btn menu" onClick={this.toggleVisibility}>
            <RiMenu3Line />
          </button>
        </div>
        <div
          className={`links ${
            !this.state.linksVisibility ? "hide__links" : ""
          }`}
        >
          {this.links.map((link, index) => {
            return (
              <a
                key={index} 
                className={!index ? "active" : ""}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`} 
                onClick={this.toggleVisibility}
              >
                <pre>
                {link}
                </pre>
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
export default Links;
