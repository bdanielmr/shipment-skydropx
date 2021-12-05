import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './formShipSkydropx.module.scss';
import Globe from '../../img/globe.svg';
import InputSkydropx from '../input-skydropx/InputSkydropx';
import StepSkydropx from '../step-skydropx/StepSkydropx';
import useForm from '../../hooks/useForm';
import validateForm from '../../utils/validateForm';

const FormShipSkydropx = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateForm);

  return (
    <div className={styles['custom-form']}>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className={styles['custom-form-globe']}>
          <img src={Globe} />
          <StepSkydropx />
          <div></div>
        </div>
        <div className={styles['custom-form-inputs']}>
          {!!values &&
            Object.keys(values)?.map((key) => {
              return (
                <InputSkydropx
                  key={key}
                  name={key}
                  value={values[key]}
                  error={errors[key]?.slice(0, 10) === key?.slice(0, 10) ? errors[key] : ''}
                  placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                  handleChange={handleChange}
                />
              );
            })}
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

FormShipSkydropx.propTypes = {
  submitForm: PropTypes.func
};

export default FormShipSkydropx;
