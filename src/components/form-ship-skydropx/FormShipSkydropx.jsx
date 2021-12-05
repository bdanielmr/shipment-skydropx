import PropTypes from 'prop-types';
import styles from './formShipSkydropx.module.scss';
import Globe from '../../img/globe.svg';
const FormShipSkydropx = (props) => {
  return (
    <div className={styles['custom-form']}>
      <div className={styles['custom-form-globe']}>
        <img src={Globe} />
      </div>
      <div className={styles['custom-form-inputs']}></div>
    </div>
  );
};

FormShipSkydropx.propTypes = {};

export default FormShipSkydropx;
