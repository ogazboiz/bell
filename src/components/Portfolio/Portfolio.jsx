import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
import site1 from '../../assest/site1.png';
import site2 from '../../assest/site2.png';
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "Modern UI/UX Dashboard Design",
        text:
          "UI designs that gives you that unique feeling and the experience you will not forget in a hurry."
      },
      {
        img: site1,
        title: "Event Planning and Ticket Sales",
        text:
          "Event planning and ticket sales site with login operations and ticket scan."
      },
      {
        img: site2,
        title: "Personal Portfolio",
        text:
          "Personal Portfolio with your CV just one click away."
      }
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See What We Have Been Up To</h1>
                  <button className="btn btn-primary">Get Yours Now</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
