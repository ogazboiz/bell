import { Component } from "react";
import "./style.css";
class Banner extends Component {
  render() {
    return (
      <section id="banner" className="banner__container">
        <div className="container">
          <h1>
            Let's Boost Your Business
            <br /> With The Latest Technologies
          </h1>
          <button className="btn btn-primary">Get a Quote</button>
        </div>
      </section>
    );
  }
}
export default Banner;
