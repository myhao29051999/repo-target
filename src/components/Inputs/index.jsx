/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react";
import PropTypes from "prop-types";

import variableStyles from "styles/variable-styles";

import { InputCustom, Label, RequiredText, InputGroup } from "./style";

function CustomInput(props) {
  const { label, isSearch, required, ...other } = props;

  return (
    <InputGroup>
      {label && (
        <Label className="caption-1 subdued">
          {label}
          {/* {required && <RequiredText> *</RequiredText>} */}
        </Label>
      )}
      <InputCustom
        {...other}
        prefix={isSearch ? <i className="icon icon-search" /> : props.prefix}
        autoComplete="off"
        required
      />
    </InputGroup>
  );
}

CustomInput.propTypes = {
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  addonAfter: PropTypes.any,
  addonBefore: PropTypes.any,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  maxLength: PropTypes.number,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  allowClear: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  isSearch: PropTypes.bool,
  required: PropTypes.bool,
};

CustomInput.defaultProps = {
  autoComplete: "off",
  size: "large",
};

export default CustomInput;
