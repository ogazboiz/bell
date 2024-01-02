import { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import img from '../../assest/Software-Development.jpeg';
import "./style.css";
class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 100
    };
  }
  render() {
    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Leading the Way in Cutting-Edge IT Solutions</h1>
            <p className="text">
            At Belsoft Systems, We are at the forefront of 
            innovative IT solutions. With a commitment to innovation, 
            we pioneer advancements that define the future of technology. 
            Our expert team ensures clients thrive in the digital era, 
            setting new standards and empowering success in an 
            ever-evolving IT landscape.
            </p>
            <div className="about__buttons">
              <button className="btn btn-primary">Get In Touch</button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src={img}
                alt="about"
                height={350}
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                
                Quality and Performance
                <br />
                <br />
              </h4>
              <small>Top quality at all times</small>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
