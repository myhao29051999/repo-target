import React from "react";
import TixCarousel from "./TixCarousel";
import MovieList from "./MovieList";
import TheaterSystem from "./TheaterSystem";

import confetti from "canvas-confetti";

import { Header } from "components";
export default function Home() {
  return (
    <div>
      <Header />
      <TixCarousel />
      <MovieList />
      <TheaterSystem />
      <b>From: a pretty girl My Hao</b>
    </div>
  );
}
