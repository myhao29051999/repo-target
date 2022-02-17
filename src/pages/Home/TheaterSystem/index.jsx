import React, { useEffect, useState } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

// utils
import { formatDate } from "utils";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import { getMovieList } from "store/actions/movie.action";
import { getListTheaterSystem } from "store/actions/system.action";

// constants
import { images } from "constants/images";

// components

// styles
import {} from "./style";

function TheaterSystem() {
  const systemList = useSelector((state) => state.system.systemList);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

  useEffect(() => {
    dispatch(getListTheaterSystem());
  }, []);

  return (
    <MasterLayout id="theaterSystem">
      {systemList.map((system, index) => (
        <p key={index}>Tên hệ thống: {system.tenHeThongRap}</p>
      ))}
    </MasterLayout>
  );
}
export default TheaterSystem;
