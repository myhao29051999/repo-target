import React from 'react';
import PropTypes from 'prop-types';
import { Required, Label } from './style';

function CustomLabel(props) {
  const { label, required } = props;
  if (label) {
    return (
      <Label className="caption-1">
        {label}
        {required && <Required>&nbsp;*</Required>}
      </Label>
    );
  }
  return null;
}

CustomLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
};

export default CustomLabel;
