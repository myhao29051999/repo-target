import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";

// components
import { Button } from "components";

// styles
import "./style.css";
function ModalTrailer(props) {
  const { videoId, isButton, ...other } = props;
  return (
    <Popup
      trigger={
        isButton ? (
          <Button type="primaryRed">Xem trailer</Button>
        ) : (
          <div className="button-play">
            <i className="fa fa-play"></i>
          </div>
        )
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <iframe
              title="Movie-modal"
              src={"https://www.youtube.com/embed/" + videoId}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="youtube-video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Popup>
  );
}
ModalTrailer.propTypes = {
  videoId: PropTypes.string,
  isButton: PropTypes.bool,
};
export default ModalTrailer;
