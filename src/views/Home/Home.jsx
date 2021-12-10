import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './home.module.scss';

import { StoreContext } from '../../store/StoreProvider';

import FormShipSkydropx from '../../components/form-ship-skydropx/FormShipSkydropx';

const Home = (props) => {
  const [store] = useContext(StoreContext);

  const { isSubmitted } = store;

  return <>{!isSubmitted ? <FormShipSkydropx /> : null}</>;
};

Home.propTypes = {};

export default Home;
