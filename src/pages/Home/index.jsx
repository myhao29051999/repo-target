import React from "react";
import TixCarousel from "./TixCarousel";
import MovieList from "./MovieList";
import TheaterSystem from "./TheaterSystem";
export default function Home() {
  return (
    <div>
      <TixCarousel />
      <MovieList />
      <TheaterSystem />
    </div>
  );
}
