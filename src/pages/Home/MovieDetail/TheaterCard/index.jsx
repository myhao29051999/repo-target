import React, {useState} from 'react';
import PropTypes from 'prop-types';

// contants
import {images} from 'constants/images'

// styles
import {InfoCard, Inside, Title, IconArrow, InfoContent} from './style';

const propTypes = {
    theaterName: PropTypes.string,
    listMovies: PropTypes.array,
    theaterId: PropTypes.string,
}

 function TheaterCard(props) {
  const {theaterName, listMovies, theaterId} = props;

  // states
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    return theaterId;
  }

  const listMoviesFilterByTheaterId = listMovies?.filter(item => item.thongTinRap.maCumRap === theaterId);
  console.log("ds phim theo mã cụm rạp, ", listMoviesFilterByTheaterId);
 
  return (
    <InfoCard>
      <Inside>
          <Title>{theaterName}</Title>
          <IconArrow src={ images.ICON_ARROW_UP} alt={isOpen ? "icon-arrow-down" : "icon-arrow-up"} onClick={handleClick} style={{transition: "transform 200ms linear", transform: `rotateZ(${isOpen ? 0 : "180deg"})`, display: "inline-block"}} />
          
      </Inside>
      {isOpen && (
            listMoviesFilterByTheaterId?.map((movie) => {
              return <InfoContent>Mã lịch chiếu: {movie.maLichChieu} - Tổng: {listMoviesFilterByTheaterId.length}</InfoContent>
            })
            
          )}
    </InfoCard>
  )
}

TheaterCard.propTypes = propTypes;


export default TheaterCard;
