import React, {useState} from 'react';
import PropTypes from 'prop-types';

// contants
import {images} from 'constants/images'

// styles
import {InfoCard, Inside, Title, IconArrow, InfoContent} from './style';

const propTypes = {
    theaterName: PropTypes.string,
}

 function TheaterCard(props) {
  const {theaterName} = props;

  // states
  const [isOpen, setIsOpen] = useState(false);
  
 
  return (
    <InfoCard>
      <Inside>
          <Title>{theaterName}</Title>
          <IconArrow src={ images.ICON_ARROW_UP} alt={isOpen ? "icon-arrow-down" : "icon-arrow-up"} onClick={() => setIsOpen(!isOpen)} style={{transition: "transform 200ms linear", transform: `rotateZ(${isOpen ? 0 : "180deg"})`, display: "inline-block"}} />
          
      </Inside>
      {isOpen && (
            <InfoContent>Hey my name is hao</InfoContent>
          )}
    </InfoCard>
  )
}

TheaterCard.propTypes = propTypes;


export default TheaterCard;
