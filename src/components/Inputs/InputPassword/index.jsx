import React from 'react';
// lib
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import { Label } from 'components';

// styles
import { InputPwdContainer } from './style';

const propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  size: 'large',
};

function CustomInputPassword(props) {
  const { label, required, readOnly, disabled, size, className, ...other } =
    props;

  // constants
  const inputClassnames = classNames({
    'input-affix-disabled': disabled,
    'input-affix-readonly': readOnly,
    [className]: className,
  });

  const inputProps = {
    readOnly,
    disabled,
    size,
  };

  return (
    <>
      <Label label={label} required={required} />
      <InputPwdContainer
        className={inputClassnames}
        {...inputProps}
        {...other}
      />
    </>
  );
}

CustomInputPassword.propTypes = propTypes;

CustomInputPassword.defaultProps = defaultProps;

export default CustomInputPassword;
