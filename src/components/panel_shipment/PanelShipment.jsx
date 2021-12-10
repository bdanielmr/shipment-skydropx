import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';

import styles from './panelShipment.module.scss';
import TableFormSkydropx from '../table_form_skydropx/TableFormSkydropx';

import PersonalInfoSkydropx from '../personal_info_skydropx/PersonalInfoSkydropx';
import ButtonSkydropx from '../button-skydropx/ButtonSkydropx';
const PanelShipment = (props) => {
  const [store] = useContext(StoreContext);
  const { ratesOrder, errorGlobal } = store;

  return (
    <>
      {errorGlobal?.length !== 0 && (
        <div className={styles['container-button-panel']}>
          {' '}
          <ButtonSkydropx route="/home" label="New Consult" />
        </div>
      )}
      <div className={styles['panel-container']}>
        <div className={styles['container-left-panel']}>
          <PersonalInfoSkydropx />
        </div>
        <div className={styles['container-right-panel']}>
          <TableFormSkydropx />
        </div>
      </div>
    </>
  );
};

PanelShipment.propTypes = {};
PanelShipment.defaultProps = {};

export default PanelShipment;
