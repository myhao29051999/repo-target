import React from "react";
import TixCarousel from "./TixCarousel";
import MovieList from "./MovieList";
import TheaterSystem from "./TheaterSystem";

import { Header } from "components";
export default function Home() {
  return (
    <div>
      <Header />
      <TixCarousel />
      <MovieList />
      <TheaterSystem />
    </div>
  );
}
