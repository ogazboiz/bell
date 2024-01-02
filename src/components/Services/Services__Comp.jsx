import { Component } from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsShop} from "react-icons/bs";
import { BsCloud} from "react-icons/bs";

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Servcices For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>
        <div>
          <div>
            <div className="icon">
             <BsLaptop />
            </div>
            <h4>Web Development</h4>
            <p>Transform your business and gain more reach with
              a website to tell your story. 
            </p>
          </div>
          <div>
            <div className="icon">
              <BsPhone />
            </div>
            <h4>Mobile App Development</h4>
            <p>Imagine giving more experience with a mobile app 
              that fits your business needs, bringing a better
              connection between business and client.
            </p>
          </div>
          <div>
            <div className="icon">
              <BsShop />
            </div>
            <h4>Digital Marketing</h4>
            <p>Discover the strategy that will grow your brand 
              and business. Getting you closer to your goals and
              costumers you need.</p>
          </div>
          <div>
            <div className="icon">
              <BsCloud />
            </div>
            <h4>IT Consultant</h4>
            <p>Don't know where to start? Let us guide you through that
              migration process that you so desire and make your digital
              dreams come to reality.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
