import React from "react";
import TixCarousel from "./TixCarousel";
import MovieList from "./MovieList";
import TheaterSystem from "./TheaterSystem";
import { Image } from "antd-mobile";

import { images } from "constants/images";

import confetti from "canvas-confetti";

import { Header } from "components";
export default function Home() {
  return (
    <div>
      <Header />
      <TixCarousel />
      <MovieList />
      <Image src={images.IMG_BG_GRAY} height={60} alt="bg-gray" />
      <TheaterSystem />
      <b>From: a pretty girl My Hao</b>
    </div>
  );
}
