import React from "react";
import { Row, Col } from "antd";
import { Image } from "antd-mobile";
import Slider from "react-slick";

// constants
import { images } from "constants/images";

// components
import { Button } from "components";

// styles
import {
  ApplicationContainer,
  ApplicationContent,
  Title,
  AppRow,
  SubTitle,
  SubTitle2,
  NameApp,
} from "./style";

function Application() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  const listSlides = [
    { id: 1, image: images.IMG_SLIDE1 },
    { id: 2, image: images.IMG_SLIDE2 },
    { id: 3, image: images.IMG_SLIDE3 },
    { id: 4, image: images.IMG_SLIDE4 },
    { id: 5, image: images.IMG_SLIDE5 },
    { id: 6, image: images.IMG_SLIDE6 },
    { id: 7, image: images.IMG_SLIDE7 },
  ];
  return (
    <ApplicationContainer id="application">
      <ApplicationContent>
        <AppRow>
          <div className="application-info">
            <Title>Ứng dụng tiện lợi dành cho người yêu điện ảnh</Title>
            <SubTitle>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </SubTitle>
            <Button type="primaryRed">App miễn phí - Tải về ngay!</Button>
            <SubTitle2>
              Tix có 2 phiên bản <NameApp>iOS</NameApp> &{" "}
              <NameApp>Android</NameApp>
            </SubTitle2>
          </div>
          <div className="slide-group">
            <Image
              src={images.IMG_PHONE}
              alt="img-phone"
              width={205}
              height={420}
            />
            <Slider className="slider" {...settings}>
              {listSlides.map((item, index) => (
                <div key={index} className="img-cover">
                  <Image
                    src={item.image}
                    width={192}
                    height={400}
                    alt="img-slide"
                    className="img-slide-item"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </AppRow>
      </ApplicationContent>
    </ApplicationContainer>
  );
}
export default Application;
