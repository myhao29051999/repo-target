import React from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
// styles
import "./style.css";
function ModalTrailer(props) {
  const { videoId, ...other } = props;
  return (
    <Popup
      trigger={
        <div className="button-play">
          <i className="fa fa-play"></i>
        </div>
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
              src={videoId}
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
};
export default ModalTrailer;
