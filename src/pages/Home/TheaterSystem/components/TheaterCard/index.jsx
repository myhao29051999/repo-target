import React, { useState } from "react";
import { Image } from "antd-mobile";
import PropTypes from "prop-types";

// styles
import {
  TheaterCardStyle,
  InfoTheater,
  TheaterName,
  TheaterAddress,
  ButtonDetail,
  MoreInfo,
} from "./style";
function TheaterCard(props) {
  const { type, name, image, address, listTheaters, onClick, ...orther } =
    props;

  // states
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const [isShowButtonSeeMore, setIsShowButtonSeeMore] = useState(true);

  const onShowMoreInfo = () => {
    setIsShowMoreInfo(true);
    setIsShowButtonSeeMore(false);
  };
  const onHiddenMoreInfo = () => {
    setIsShowMoreInfo(false);
    setIsShowButtonSeeMore(true);
  };

  return (
    <TheaterCardStyle aria-hidden={true} onClick={onClick}>
      <Image width={50} height={50} src={image} alt="img-cinema" />
      <InfoTheater>
        <TheaterName type={type}>{name}</TheaterName>
        <TheaterAddress>{address}</TheaterAddress>
        {isShowButtonSeeMore && (
          <ButtonDetail aria-hidden={true} onClick={onShowMoreInfo}>
            [xem thêm]
          </ButtonDetail>
        )}
        {isShowMoreInfo && (
          <>
            <MoreInfo>
              <b>Địa chỉ:</b> {address}
            </MoreInfo>
            <MoreInfo>
              <b>Số lượng rạp:</b> {listTheaters.length}
            </MoreInfo>
            <ButtonDetail aria-hidden={true} onClick={onHiddenMoreInfo}>
              [ẩn bớt]
            </ButtonDetail>
          </>
        )}
      </InfoTheater>
    </TheaterCardStyle>
  );
}
TheaterCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  listTheaters: PropTypes.any,
  onClick: PropTypes.func,
};
export default TheaterCard;
