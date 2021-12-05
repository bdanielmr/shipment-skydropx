import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputSkydropx.module.scss';
const InputSkydropx = ({ name, value, error, handleChange, placeholder }) => {
  return (
    <div className={styles['custom-input']}>
      <label className="form-label">
        {placeholder.toLowerCase().charAt(0).toUpperCase() + placeholder.toLowerCase().slice(1)}
      </label>
      <input
        className="form-input"
        type="text"
        name={name}
        placeholder={`Enter your ${placeholder.toLowerCase()}`}
        value={value}
        onChange={handleChange}
      />
      {error.value && <p>{error.value}</p>}
    </div>
  );
};

InputSkydropx.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.object,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};
InputSkydropx.defaultProps = {
  name: '',
  value: '',
  error: {},
  handleChange: () => {},
  placeholder: 'input'
};
export default InputSkydropx;
