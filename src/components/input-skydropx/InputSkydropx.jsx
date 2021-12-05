import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputSkydropx.module.scss';
const InputSkydropx = ({ name, value, error, handleChange, placeholder }) => {
  console.log('error', error);
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
      {error && <p>{error}</p>}
    </div>
  );
};

InputSkydropx.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};
InputSkydropx.defaultProps = {
  name: '',
  value: '',
  error: '',
  handleChange: () => {},
  placeholder: 'input'
};
export default InputSkydropx;
