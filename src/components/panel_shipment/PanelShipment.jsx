import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { apiPostShipments } from '../../utils/routes';
import LabelForm from '../label_form/LabelForm';
import styles from './panelShipment.module.scss';
import TableFormSkydropx from '../table_form_skydropx/TableFormSkydropx';
import { types } from '../../store/storeReducer';
const PanelShipment = ({ postDataShipments }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { isSubmitted } = store;
  useEffect(() => {
    if (!localStorage?.OPTIONSHIP) {
      !!postDataShipments?.postDataShip &&
        apiPostShipments(JSON.stringify(postDataShipments?.postDataShip)).then((res) => {
          dispatch({
            type: types.getTableOptionsSuccess,
            payload: res
          });
          localStorage.setItem('OPTIONSHIP', JSON.stringify(res));
        });
    }
  }, [postDataShipments?.postDataShip]);
  return (
    <LabelForm>
      <div className={styles['panel-container']}>
        <div className={styles['container-left-panel']}>
          <TableFormSkydropx />
        </div>
        <div className={styles['container-right-panel']}>bye</div>
      </div>
    </LabelForm>
  );
};

PanelShipment.propTypes = {
  postDataShipments: PropTypes.object
};
PanelShipment.defaultProps = {
  postDataShipments: {}
};

export default PanelShipment;
