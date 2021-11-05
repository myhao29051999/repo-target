import React from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import { images } from "constants/images";

const propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  placement: PropTypes.string,
  onClose: PropTypes.func,
  onOpenDrawer: PropTypes.func,
  visible: PropTypes.bool,
};
function CustomDrawer(props) {
  const {
    children,
    title,
    placement,
    visible,
    onClose,
    onOpenDrawer,
    ...other
  } = props;

  return (
    <>
      <img
        style={{
          width: "25px",
          height: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        src={images.IMG_SIDE_BAR}
        alt="img-sidebar"
        onClick={onOpenDrawer}
      />
      <Drawer
        {...other}
        title={title}
        placement={placement}
        onClose={onClose}
        visible={visible}
      >
        {children}
      </Drawer>
    </>
  );
}
CustomDrawer.propTypes = propTypes;
export default CustomDrawer;
