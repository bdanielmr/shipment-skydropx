import PropTypes from 'prop-types';
import styles from './buttonSkydropx.module.scss';
const ButtonSkydropx = ({ label }) => {
  return (
    <div className={styles['custom-button']}>
      <button>{label}</button>
    </div>
  );
};

ButtonSkydropx.propTypes = {
  label: PropTypes.string
};
ButtonSkydropx.defaultProps = {
  label: 'Button'
};
export default ButtonSkydropx;
