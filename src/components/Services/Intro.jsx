import { Component } from "react";
import { BiCode } from "react-icons/bi";
import { BiSolidBusiness } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <BiSolidBusiness />
              </div>
              <p>Empowering businesses through cutting-edge software solutions.</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiCode />
              </div>
              <p>Crafting code, forging solutions, powering digital evolution.</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>Creating Solutions That Meet Your Needs</h1>
            <p className="text">
            Embark on a journey of IT excellence with us. 
            We don't just solve IT problems; we redefine possibilities. 
            Our innovative solutions are the antidote to challenges, 
            propelling your business into a realm of seamless operations 
            and unparalleled success. Experience the future of IT with 
            us—where challenges become triumphs.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
