/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './home.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
import FormShipSkydropx from '../../components/form-ship-skydropx/FormShipSkydropx';
import { types } from '../../store/storeReducer';
import PanelShipment from '../../components/panel_shipment/PanelShipment';
const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [store, dispatch] = useContext(StoreContext);
  const { dataShipments, dataSkyAdvice } = store;
  const [dataShip, setDataShip] = useState(null);
  const history = useHistory();
  /**
   * 
  apiPostShipments(JSON.stringify(dataShipments));
   */
  function submitForm() {
    setIsSubmitted(true);
  }
  const extraShipments = () => {
    const deep = JSON.parse(JSON.stringify(dataShipments));
    setDataShip({
      ...deep,
      address_from: { ...deep?.['address_from'], zip: dataSkyAdvice?.codeZipOrigin },
      address_to: { ...deep?.['address_to'], zip: dataSkyAdvice?.codeZipDestination },
      parcels: [
        ...deep?.['parcels'].map((data) => {
          if (data.weight) {
            data.weight = dataSkyAdvice?.weightPerPackageInKg;
          }
          return data;
        })
      ]
    });
  };

  useEffect(() => {
    isSubmitted && extraShipments();
  }, [dataSkyAdvice]);
  return (
    <>
      <HeaderSkydropx />
      {!isSubmitted ? (
        <FormShipSkydropx submitForm={submitForm} />
      ) : (
        <PanelShipment body={{ step: '2', dataShip }} />
      )}
    </>
  );
};

Home.propTypes = {};

export default Home;
