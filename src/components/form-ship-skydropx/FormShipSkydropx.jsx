import PropTypes from 'prop-types';
import styles from './formShipSkydropx.module.scss';
import Globe from '../../img/globe.svg';
import InputSkydropx from '../input-skydropx/InputSkydropx';
const optionInput = [
  {
    value: '',
    error: '',
    input: 'test '
  },
  {
    value: '',
    error: '',
    input: 'test 2'
  },
  {
    value: '',
    error: '',
    input: 'test 3'
  }
];
const FormShipSkydropx = (props) => {
  return (
    <div className={styles['custom-form']}>
      <div className={styles['custom-form-globe']}>
        <img src={Globe} />
      </div>
      <div className={styles['custom-form-inputs']}>
        {!!optionInput &&
          optionInput.map((input, index) => {
            return <InputSkydropx key={index} />;
          })}
      </div>
    </div>
  );
};

FormShipSkydropx.propTypes = {};

export default FormShipSkydropx;
