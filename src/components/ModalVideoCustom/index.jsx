import React, { useState } from "react";

import PropTypes from "prop-types";

// styles
import { ButtonPlayStyle, ModalVideoStyle } from "./style";
function ModalVideoCustom(props) {
  const { videoId, ...other } = props;
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideoStyle
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      ></ModalVideoStyle>
      <ButtonPlayStyle
        className="modeo-video__btnPlay"
        onClick={() => setOpen(true)}
      >
        <i className="fa fa-play"></i>
      </ButtonPlayStyle>
    </>
  );
}
ModalVideoCustom.propTypes = {
  videoId: PropTypes.string,
};
export default ModalVideoCustom;
