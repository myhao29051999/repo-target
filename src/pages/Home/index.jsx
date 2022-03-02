import React from "react";
import { Image } from "antd-mobile";

// pages
import TixCarousel from "./TixCarousel";
import MovieList from "./MovieList";
import TheaterSystem from "./TheaterSystem";
import News from "./News";
import Application from "./Application";

// constants
import { images } from "constants/images";

// styles
import { HomeContainer } from "./style";

import { Header } from "components";
export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <TixCarousel />
      <MovieList />
      <Image
        src={images.IMG_BG_GRAY}
        height={60}
        alt="bg-gray"
        className="home-bg-1"
      />
      <TheaterSystem />
      <Image src={images.IMG_BG_GRAY} height={60} alt="bg-gray" />
      <News />
      <Application />
    </HomeContainer>
  );
}
