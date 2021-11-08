import React from "react";
import PropTypes from "prop-types";

// styles
import { MasterLayoutStyle } from "./style";

const propTypes = {
  children: PropTypes.any,
};
function MasterLayout(props) {
  const { children, ...other } = props;
  return <MasterLayoutStyle>{children}</MasterLayoutStyle>;
}
MasterLayout.propTypes = propTypes;
export default MasterLayout;
