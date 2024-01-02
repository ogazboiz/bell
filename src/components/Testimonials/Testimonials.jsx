import { Component } from "react";
import Testimony from "./Testimony";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import client1 from '../../assest/blackDiamond.jpg';
import client2 from '../../assest/madeyummy.jpg';
import client3 from '../../assest/ordesea2png.png';
import client4 from '../../assest/Belsoft_Transparent.png';


class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      slidesPerView: 2.5
    };
    this.fitSlidesPerView = this.fitSlidesPerView.bind(this);
  }
  fitSlidesPerView() {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      this.setState({ slidesPerView: 1.3 });
    } else if (window.innerWidth <= 600) {
      this.setState({ slidesPerView: 1 });
    } else {
      this.setState({ slidesPerView: 2.5 });
    }
  }
  componentDidMount() {
    this.fitSlidesPerView();
  }

  render() {
    window.addEventListener("resize", this.fitSlidesPerView);

    return (
      <section id="testimony" className="container container__testimonials">
        <h1 className="container">How People Think About Us</h1>
        <Swiper
          className="testimonials__slide container"
          slidesPerView={this.state.slidesPerView}
          spaceBetween={20}
        >
          <SwiperSlide>
            <Testimony 
            img={client1} 
            text="Working with Belsoft Systems is a mind changing experience. Its all positive energy. I love working with these guys."
            name="Black Diamond Entertainment"
            occupation="Event Management Company"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony 
            img={client2} 
            text="The Thought of building a brand was overwhelming for me but Belsoft Systems made it so easy and now we are always one step ahead doing well."
            name="Made Yummy"
            occupation="Healthy Drinks Company"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony 
            img={client3} 
            text="Been working with Belsoft Systems a few years. The working relationship is something that has kept us coming back."
            name="Ordesea Resources Ltd"
            occupation="Geological and Mining Company"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony 
            img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" 
            text="Been working with Belsoft Systems a few years. The working relationship is something that has kept us coming back."
            name="Felix Johnson"
            occupation="Business Man"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}
export default Testimonials;
