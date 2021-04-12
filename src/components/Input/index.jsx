import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-control bg-primary text-dark fw-bold input_style"
    />
  );
};

Input.defaultProps = {
  value: "",
  placeholder: "",
  onChange: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.any,
};

export default Input;
