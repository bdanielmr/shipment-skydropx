/* eslint-disable react/display-name */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
import FormShipSkydropx from '../../components/form-ship-skydropx/FormShipSkydropx';
import { types } from '../../store/storeReducer';
import PanelShipment from '../../components/panel_shipment/PanelShipment';
const InfoPageShipment = ({ match }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { postDataShipments, isSubmitted } = store;
  function isSubmitForm() {
    dispatch({
      type: types.getIsSubmittedSuccess,
      payload: false
    });
  }
  useEffect(() => {
    isSubmitForm();
  }, []);

  return (
    <>
      <PanelShipment postDataShipments={postDataShipments} />
    </>
  );
};

InfoPageShipment.propTypes = {
  match: PropTypes.object
};

export default InfoPageShipment;
