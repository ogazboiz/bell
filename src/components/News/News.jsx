import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import HotNews from "./News__Hot";
import LatestNews from "./News__Latest";
import "./style.css";
import img from '../../assest/ordesea2png.png';

class News extends Component {
  constructor() {
    super();
    this.hotNews = [
      {
        title: "Great Technology Solution",
        avatar: img,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic praesentium sunt incidunt quasi eos? Expedita temporibus dolorum nisi ratione harum quae suscipit, distinctio repellat in! Vero quisquam delectus nemo incidunt commodi perferendis repellendus quaerat, pariatur quidem itaque blanditiis magni.",
        author: "Ordesea Resources Ltd",
        role: "Geological and Mining Company"
      },
      {
        title: "Great Technology Solution",
        avatar: img,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic praesentium sunt incidunt quasi eos? Expedita temporibus dolorum nisi ratione harum quae suscipit, distinctio repellat in! Vero quisquam delectus nemo incidunt commodi perferendis repellendus quaerat, pariatur quidem itaque blanditiis magni.",
        author: "Ordesea Resources Ltd",
        role: "Geological and Mining Company"
      }
    ];
    this.lastestNews = [
      {
        img:
          "https://wd.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/yezj4CV8NRdONDSUmpWr.png",
        date: "30 March 2022",
        author: "Admin",
        text:
          "When browsers first reached version 10, there were a few issues as the major version number went from one digit to two. Hopefully, we learned a few things that'll ease the transition from two digits to three."
      },
      {
        img:
          "https://blog.logrocket.com/wp-content/uploads/2022/03/client-side-routing-react-location.png",
        date: "30 March 2022",
        author: "Admin",
        text:
          "Routing is one of the essential aspects of single-page applications (SPAs), but because React doesn’t come with a routing solution."
      }
    ];
  }
  render() {
    return (
      <section className="container news__container">
        <Swiper className="news__hot" pagination={true} modules={[Pagination]}>
          {this.hotNews.map((feed, index) => {
            return (
              <SwiperSlide>
                <HotNews
                  title={feed.title}
                  text={feed.text}
                  avatar={feed.avatar}
                  author={feed.author}
                  role={feed.role}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="news__latest">
          <h1>Our Partners</h1>
          {this.lastestNews.map((feed) => {
            return (
              <LatestNews
                img={feed.img}
                date={feed.date}
                author={feed.author}
                text={feed.text}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default News;
