import { SELECTION_NONE } from "antd/lib/table/hooks/useSelection";
import React from "react";
import { Carousel } from "react-carousel-minimal";

// styles
import { TixCarouselStyle } from "./style";

export default function TixCarousel() {
  const data = [
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Teaser-TroChoi-DayBinh.png",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2018/03/Black-Widow.png",
    },
    {
      image: " https://www.bhdstar.vn/wp-content/uploads/2018/03/Shangchi.png",
    },
    {
      image:
        "https://www.bhdstar.vn/wp-content/uploads/2021/10/Venom-1920x1080.jpg",
    },
  ];
  const captionStyle = {
    // fontSize: "2em",
    // fontWeight: "bold",
    display: "none",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <TixCarouselStyle className="App">
      <div style={{ textAlign: "center" }}>
        <div className="tix-carousel">
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="650px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            caption={false}
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "650px",
              margin: "60px auto",
            }}
          />
          <div className="button-play">
            <i className="fa fa-play"></i>
          </div>
        </div>
      </div>
    </TixCarouselStyle>
  );
}
