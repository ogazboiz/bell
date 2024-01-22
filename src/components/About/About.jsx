import { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import img from "../../assest/Software-Development.jpeg";
import "./style.css";
class About extends Component {
	constructor() {
		super();
		this.state = {
			percentage: 100,
		};
	}
	render() {
		return (
			<section className="about__container">
				<div className="container">
					<div>
						<h1>Leading the Way in Cutting-Edge IT Solutions</h1>
						<p className="text">
							At Belsoft Systems, We are at the forefront of innovative IT
							solutions. With a commitment to innovation, we pioneer
							advancements that define the future of technology. Our expert team
							ensures clients thrive in the digital era, setting new standards
							and empowering success in an ever-evolving IT landscape.
						</p>
						<div className="about__buttons">
							<button className="btn btn-primary">Get a Quote</button>
							<a href="#services">
								<span>Our Services</span>
								<AiOutlineArrowDown />
							</a>
						</div>
					</div>
					<div style={{ position: "relative" }}>
						<div className="about__image">
							<img src={img} alt="about" height={350} />
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
				<div className="about-belsoft">
					<h1>About BelSoft</h1>
					<small className="text">
						BELSOFT SYSTEMS LTD is an organization that specializes in creating
						and delivering software solutions to meet the technological needs
						and requirements of businesses, individuals, and other clients. Our
						principal activities encompass a wide range of tasks and
						responsibilities aimed at designing, building, and maintaining
						software applications.
					</small>
				</div>
				<div className="about-belsoft">
					<h2>Our Vision</h2>
					<small className="text">
						Pursuing perfection in every code iteration, our objective is to
						contribute positively on a global scale by providing software
						solutions that are robust, scalable, and centered around
						user experience.
					</small>
				</div>
				<div className="about-belsoft">
          <h2>Our Mission</h2>
					<small className="text">
						Our mission is to empower individuals and organizations globally
						through advanced software engineering. We are committed to
						delivering top-tier digital solutions that are adaptable and
						user-centric, consistently meeting the evolving needs of our
						clients. By seamlessly integrating innovative technologies, we
						position ourselves as a trusted partner, driving digital
						transformation with excellence and reliability across
						diverse industries.
					</small>
				</div>
			</section>
		);
	}
}
export default About;
