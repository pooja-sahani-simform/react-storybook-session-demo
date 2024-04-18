import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const DemoButton = ({  label, ...props }) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

DemoButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

DemoButton.defaultProps = {
  onClick: undefined,
};
