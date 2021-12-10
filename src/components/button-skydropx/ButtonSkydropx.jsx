import PropTypes from 'prop-types';
import styles from './buttonSkydropx.module.scss';
import { Link } from 'react-router-dom';
const ButtonSkydropx = ({ label, route, type }) => {
  return (
    <Link to={route} className={styles['custom-button']}>
      <button type={type}>{label}</button>
    </Link>
  );
};

ButtonSkydropx.propTypes = {
  label: PropTypes.string,
  route: PropTypes.any,
  type: PropTypes.string
};
ButtonSkydropx.defaultProps = {
  label: 'Button',
  route: false,
  type: ''
};
export default ButtonSkydropx;
