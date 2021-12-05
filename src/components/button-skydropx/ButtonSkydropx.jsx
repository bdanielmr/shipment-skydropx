import PropTypes from 'prop-types';
import styles from './buttonSkydropx.module.scss';
import { Link } from 'react-router-dom';
const ButtonSkydropx = ({ label, route }) => {
  return (
    <Link to={route} className={styles['custom-button']}>
      <button>{label}</button>
    </Link>
  );
};

ButtonSkydropx.propTypes = {
  label: PropTypes.string,
  route: PropTypes.string
};
ButtonSkydropx.defaultProps = {
  label: 'Button',
  route: '/'
};
export default ButtonSkydropx;
