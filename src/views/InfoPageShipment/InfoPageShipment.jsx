/* eslint-disable react/display-name */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StoreContext } from '../../store/StoreProvider';

import { types } from '../../store/storeReducer';
import PanelShipment from '../../components/panel_shipment/PanelShipment';
const InfoPageShipment = ({ match }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { loadingConsult } = store;

  useEffect(() => {
    dispatch({
      type: types.getIsSubmittedSuccess,
      payload: false
    });
  }, []);
  return <>{!loadingConsult && <PanelShipment />}</>;
};

InfoPageShipment.propTypes = {
  match: PropTypes.object
};

export default InfoPageShipment;
