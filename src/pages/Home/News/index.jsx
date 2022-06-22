import React from "react";
import { Tabs, Row, Col } from "antd";
import { Image } from "antd-mobile";
import Slider from "react-slick";
// layouts
import MasterLayout from "layouts/MasterLayout";

// constants
import { images } from "constants/images";

// styles
import { NewsContent } from "./style";
const { TabPane } = Tabs;
function News() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const listPromotions = [
    { id: 1, image: images.IMG_KM1 },
    { id: 2, image: images.IMG_KM2 },
    { id: 3, image: images.IMG_KM3 },
    { id: 4, image: images.IMG_KM4 },
    { id: 5, image: images.IMG_KM5 },
    { id: 6, image: images.IMG_KM6 },
    { id: 7, image: images.IMG_KM7 },
    { id: 8, image: images.IMG_KM8 },
  ];
  const listEvents = [
    { id: 1, image: images.IMG_SK1 },
    { id: 2, image: images.IMG_SK2 },
    { id: 3, image: images.IMG_SK3 },
    { id: 4, image: images.IMG_SK4 },
  ];
  return (
    <MasterLayout id="news">
      <NewsContent className="card-container">
        <Tabs type="card">
          <TabPane tab="Khuyến mãi" key="1">
            <Slider {...settings}>
              {listPromotions.map((item, index) => (
                <div key={index}>
                  <Image
                    height={242}
                    width="97%"
                    src={item.image}
                    alt="img-promotion"
                    className="img-news"
                  />
                </div>
              ))}
            </Slider>
          </TabPane>
          <TabPane tab="Sự kiện" key="2">
            <Slider {...settings}>
              {listEvents.map((item, index) => (
                <div key={index}>
                  <Image
                    height={242}
                    width="97%"
                    src={item.image}
                    alt="img-promotion"
                    className="img-news"
                  />
                </div>
              ))}
            </Slider>
          </TabPane>
        </Tabs>
      </NewsContent>
    </MasterLayout>
  );
}
export default News;
