import React from "react";
import { Image } from "antd";

// components
import { ModalVideoCustom } from "components";

// styles
import { TixCarouselStyle } from "./style";

export default function TixCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <TixCarouselStyle {...settings}>
      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Teaser-TroChoi-DayBinh.png"
          alt="img-carousel"
        />
        <ModalVideoCustom videoId={"oqxAJKy0ii4"} />
      </div>

      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Black-Widow.png"
          alt="img-carousel"
        />
        <ModalVideoCustom videoId={"fByNc-ZHAP8"} />
      </div>
      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Shangchi.png"
          alt="img-carousel"
        />
        <ModalVideoCustom videoId={"8YjFbMbfXaQ"} />
      </div>
      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Suicide-Squad-1920-x-1080.jpg"
          alt="img-carousel"
        />
        <ModalVideoCustom videoId={"QTg5K0XDiaE"} />
      </div>
    </TixCarouselStyle>
  );
}
