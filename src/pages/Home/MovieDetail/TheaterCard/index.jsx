import React, { useState } from 'react';
import PropTypes from 'prop-types';

// contants
import { images } from 'constants/images'

// styles
import { InfoCard, Inside, Title, IconArrow, InfoContent } from './style';

const propTypes = {
  theaterName: PropTypes.string,
  listMovies: PropTypes.array,
  theaterId: PropTypes.string,
}

function TheaterCard(props) {
  const { theaterName, listMovies, theaterId } = props;

  // states
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
    return theaterId;
  }

  const listMoviesFilterByTheaterId = listMovies?.filter(item => item.thongTinRap.maCumRap === theaterId);
  const listTenMovies = listMoviesFilterByTheaterId?.slice(count, count + 10);
  console.log("ds phim", listMoviesFilterByTheaterId);
  return (
    <InfoCard>
      <Inside>
        <Title>{theaterName}</Title>
        <IconArrow src={images.ICON_ARROW_UP} alt={isOpen ? "icon-arrow-down" : "icon-arrow-up"} onClick={handleClick} style={{ transition: "transform 200ms linear", transform: `rotateZ(${isOpen ? 0 : "180deg"})`, display: "inline-block" }} />

      </Inside>
      {isOpen && (
        listTenMovies?.length > 0 && listTenMovies?.map((movie, index) => {
          return <>
            <InfoContent>
              {/* show ngày chiếu, rạp, giá vé, btn mua vé => chuyển sang trang ds ghế */}
              stt: {index + 1}- Mã lịch chiếu: {movie.maLichChieu}
            </InfoContent>
          </>
        })
      )}
      {isOpen && listMoviesFilterByTheaterId?.length > 10 && (
          <button onClick={() => listTenMovies?. length < 10 ? setCount(0) : setCount(count + 10)}>Xem tiếp</button>
      )}
    </InfoCard>
  )
}

TheaterCard.propTypes = propTypes;


export default TheaterCard;
