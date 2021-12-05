/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './home.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
import FormShipSkydropx from '../../components/form-ship-skydropx/FormShipSkydropx';
import { apiPostShipments } from '../../utils/routes';

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [store] = useContext(StoreContext);
  const { dataShipments } = store;
  const history = useHistory();
  /**
   * 
  apiPostShipments(JSON.stringify(dataShipments));
   */
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <HeaderSkydropx />
      <FormShipSkydropx submitForm={submitForm} />
    </>
  );
};

Home.propTypes = {};

export default Home;
