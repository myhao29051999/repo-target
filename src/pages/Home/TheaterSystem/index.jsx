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

// styles
import { TheaterContent, ColImgTheater, ImgTheater, DivCover } from "./style";

function TheaterSystem() {
  const theaterList = useSelector((state) => state.system.systemList);
  const thongTinCumRap = useSelector((state) => state.system.thongTinCumRap);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

  // state
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [active, setActive] = useState();

  const onGetMaHeThongRap = (item) => {
    setMaHeThongRap(item?.maHeThongRap);
    setActive(item?.maHeThongRap);
  };

  useEffect(() => {
    dispatch(getListTheaterSystem());
  }, []);

  useEffect(() => {
    dispatch(getThongTinCumRapTheoHeThong(maHeThongRap));
  }, [maHeThongRap]);

  return (
    <MasterLayout id="theaterSystem">
      <TheaterContent>
        <ColImgTheater span={4}>
          {theaterList.map((item, index) => (
            <DivCover key={index}>
              <ImgTheater
                key={index}
                className={item?.maHeThongRap === active ? "img-active" : ""}
                src={item?.logo}
                aria-hidden={true}
                onClick={() => onGetMaHeThongRap(item)}
              />
            </DivCover>
          ))}
        </ColImgTheater>
        <ColImgTheater span={8}></ColImgTheater>
        <ColImgTheater span={12}></ColImgTheater>
      </TheaterContent>
    </MasterLayout>
  );
}
export default TheaterSystem;
