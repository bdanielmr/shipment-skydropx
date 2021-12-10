import React from 'react';
import PropTypes from 'prop-types';
import styles from './formShipSkydropx.module.scss';
import InputSkydropx from '../input-skydropx/InputSkydropx';

import useForm from '../../hooks/useForm';
import validateForm from '../../utils/validateForm';
import LabelForm from '../label_form/LabelForm';

const FormShipSkydropx = (props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(validateForm);

  return (
    <LabelForm>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className={styles['custom-form-globe']}></div>
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
          <div className={styles['button-form-sky']}>
            <button type="submit">Generate</button>
          </div>
        </div>
      </form>
    </LabelForm>
  );
};

FormShipSkydropx.propTypes = {
  submitForm: PropTypes.func
};

export default FormShipSkydropx;
