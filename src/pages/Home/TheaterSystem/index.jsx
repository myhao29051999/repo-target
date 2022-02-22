import React, { useEffect, useState } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import {
  getListTheaterSystem,
  getThongTinCumRapTheoHeThong,
} from "store/actions/system.action";

// constants
import { images } from "constants/images";

// components
import TheaterCard from "./TheaterCard";

// styles
import {
  TheaterContent,
  ColImgTheater,
  ImgTheater,
  DivCover,
  ColInfoTheater,
} from "./style";

function TheaterSystem() {
  const theaterList = useSelector((state) => state.system.systemList);
  const cumRap = useSelector((state) => state.system.thongTinCumRap);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

  // state
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [active, setActive] = useState();

  const onGetMaHeThongRap = (item) => {
    setMaHeThongRap(item?.maHeThongRap);
    setActive(item?.maHeThongRap);
  };

  const onGetTypeTheater = () => {
    if (maHeThongRap === "BHDStar") {
      return "bhdStar";
    } else if (maHeThongRap === "CGV") {
      return "cgv";
    } else if (maHeThongRap === "CineStar") {
      return "cns";
    } else if (maHeThongRap === "Galaxy") {
      return "galaxy";
    } else if (maHeThongRap === "LotteCinima") {
      return "lotte";
    }
    return "mega";
  };

  const onRenderImageTheater = () => {
    if (maHeThongRap === "BHDStar") {
      return images.IMG_BHD;
    } else if (maHeThongRap === "CGV") {
      return images.IMG_CGV;
    } else if (maHeThongRap === "CineStar") {
      return images.IMG_CNS;
    } else if (maHeThongRap === "Galaxy") {
      return images.IMG_GALAXY;
    } else if (maHeThongRap === "LotteCinima") {
      return images.IMG_LOTTE;
    }
    return images.IMG_MEGA;
  };

  useEffect(() => {
    dispatch(getListTheaterSystem());
  }, []);

  useEffect(() => {
    if (maHeThongRap !== "") {
      dispatch(getThongTinCumRapTheoHeThong(maHeThongRap));
    }
  }, [maHeThongRap]);

  return (
    <MasterLayout id="theaterSystem">
      <TheaterContent>
        <ColImgTheater span={4}>
          {theaterList.map((item, index) => (
            <DivCover key={index}>
              <ImgTheater
                key={index}
                className={
                  item?.maHeThongRap === active ? "img-active" : "img-theater"
                }
                src={item?.logo}
                aria-hidden={true}
                onClick={() => onGetMaHeThongRap(item)}
              />
            </DivCover>
          ))}
        </ColImgTheater>
        <ColInfoTheater span={8}>
          {cumRap.map((item, index) => (
            <TheaterCard
              key={index}
              image={onRenderImageTheater()}
              type={onGetTypeTheater()}
              name={item?.tenCumRap}
            />
          ))}
        </ColInfoTheater>
        <ColImgTheater span={12}></ColImgTheater>
      </TheaterContent>
    </MasterLayout>
  );
}
export default TheaterSystem;
