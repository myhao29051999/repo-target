import React from 'react';
// emotion styled
import { StyledButton } from './style';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

function Button(props) {
  const { className, children, ...other } = props;

  const btnClasses = classNames({
    'nonanimating-btn': true,
    'custom-ant-button': true,
    [className]: className,
  });

  return (
    <StyledButton {...other} className={btnClasses}>
      {children}
    </StyledButton>
  );
}
Button.propTypes = propTypes;
export default Button;
