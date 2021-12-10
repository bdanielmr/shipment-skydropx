import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { useParams } from 'react-router-dom';
import { types } from '../../store/storeReducer';

import styles from './successShipment.module.scss';
import { apiGetInfoShipment } from '../../utils/routes';
import CardShipment from '../../components/card_shipment/CardShipment';
const SuccessShipment = ({ match }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { loadingConsult } = store;

  const params = useParams();

  useEffect(() => {
    dispatch({
      type: types.getLoadingSuccess,
      payload: true,
      payloadShow: false
    });
    async function fetchInfoShipment() {
      const response = await apiGetInfoShipment(
        JSON.stringify({ label_format: 'pdf', rate_id: Number(params.id) })
      );
      dispatch({
        type: types.getRatesOrderSuccess,
        payload: response
      });
      !!response?.message &&
        dispatch({
          type: types.getErrorSuccess,
          payload: response
        });
      response?.data?.attributes?.status === 'ERROR' &&
        dispatch({
          type: types.getErrorSuccess,
          payload: response
        });
      response &&
        dispatch({
          type: types.getLoadingSuccess,
          payload: false,
          payloadShow: true
        });
    }
    fetchInfoShipment();
  }, [params.id]);

  return (
    <div className={styles['custom-success-shipment']}>{!loadingConsult && <CardShipment />}</div>
  );
};

SuccessShipment.propTypes = {
  match: PropTypes.object
};

export default SuccessShipment;
