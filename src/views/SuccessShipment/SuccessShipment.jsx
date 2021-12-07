/* eslint-disable react/display-name */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StoreContext } from '../../store/StoreProvider';
import { useHistory, useParams } from 'react-router-dom';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
import FormShipSkydropx from '../../components/form-ship-skydropx/FormShipSkydropx';
import { types } from '../../store/storeReducer';
import PanelShipment from '../../components/panel_shipment/PanelShipment';
import styles from './successShipment.module.scss';
import { apiGetInfoShipment } from '../../utils/routes';
import CardShipment from '../../components/card_shipment/CardShipment';
const SuccessShipment = ({ match }) => {
  const [store, dispatch] = useContext(StoreContext);
  const [shipmentInfo, setShipmentInfo] = useState([]);
  const { postDataShipments, isSubmitted, ratesOrder } = store;

  const params = useParams();
  console.log('params isSubmitted', params);
  console.log('ratesOrder ratesOrder');

  useEffect(() => {
    async function fetchInfoShipment() {
      const response = await apiGetInfoShipment(
        JSON.stringify({ label_format: 'pdf', rate_id: Number(params.id) })
      );

      setShipmentInfo(response);
    }
    fetchInfoShipment();
  }, [params]);
  console.log('shipmentInfo FINAL', shipmentInfo);
  return (
    <div className={styles['custom-success-shipment']}>
      {ratesOrder?.[1].attributes.days}
      <CardShipment />
    </div>
  );
};

SuccessShipment.propTypes = {
  match: PropTypes.object
};

export default SuccessShipment;
