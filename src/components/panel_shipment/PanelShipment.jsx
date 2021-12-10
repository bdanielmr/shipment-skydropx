import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { apiPostShipments } from '../../utils/routes';
import styles from './panelShipment.module.scss';
import TableFormSkydropx from '../table_form_skydropx/TableFormSkydropx';
import { types } from '../../store/storeReducer';
import PersonalInfoSkydropx from '../personal_info_skydropx/PersonalInfoSkydropx';

const PanelShipment = (props) => {
  return (
    <div className={styles['panel-container']}>
      <div className={styles['container-left-panel']}>
        <PersonalInfoSkydropx />
      </div>
      <div className={styles['container-right-panel']}>
        <TableFormSkydropx />
      </div>
    </div>
  );
};

PanelShipment.propTypes = {};
PanelShipment.defaultProps = {};

export default PanelShipment;
