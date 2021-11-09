import React from "react";
import PropTypes from "prop-types";

// styles
import { MasterLayoutStyle } from "./style";

const propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};
function MasterLayout(props) {
  const { children, id, ...other } = props;
  return <MasterLayoutStyle id={id}>{children}</MasterLayoutStyle>;
}
MasterLayout.propTypes = propTypes;
export default MasterLayout;
