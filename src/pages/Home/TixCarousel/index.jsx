import React from "react";
import { Image } from "antd";
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
      <div>
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Teaser-TroChoi-DayBinh.png"
          alt="img-carousel"
        />
        <a
          class="venobox myVenobox"
          data-autoplay="true"
          data-vbtype="video"
          href="https://www.youtube.com/watch?v=L2EodPu-3DY&feature=youtu.be"
        >
          <i class="fa fa-play"></i>
        </a>
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Black-Widow.png"
          alt="img-carousel"
        />
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Shangchi.png"
          alt="img-carousel"
        />
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2021/10/Venom-1920x1080.jpg"
          alt="img-carousel"
        />
      </div>
    </TixCarouselStyle>
  );
}
