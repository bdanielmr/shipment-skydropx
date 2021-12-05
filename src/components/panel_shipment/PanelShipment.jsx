import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiPostShipments } from '../../utils/routes';
import { useFetch } from '../../hooks/useFetch';

const PanelShipment = ({ body }) => {
  const { data: newData } =
    !!body?.dataShip && useFetch(apiPostShipments, JSON.stringify(body?.dataShip));
  console.log('into panel', body);
  console.log('into newData', newData);
  return <div></div>;
};

PanelShipment.propTypes = {
  body: PropTypes.object
};
PanelShipment.defaultProps = {
  body: {}
};

export default PanelShipment;
