import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import styles from './personalInfoSkydropx.module.scss';
const PersonalInfoSkydropx = () => {
  const [store] = useContext(StoreContext);
  const { tableOptions } = store;

  return (
    <div className={styles['custom-personal-info']}>
      <p className={styles['title-personal-info']}>Package Information</p>
      {tableOptions?.included?.map((opt, ind) => {
        return (
          opt.type === 'parcels' && (
            <label key={ind}>
              <p>
                Height: {' ' + opt.attributes.height}
                {opt.attributes.distance_unit}
              </p>
              <p>
                Width:
                {' ' + opt.attributes.width}
                {opt.attributes.distance_unit}
              </p>
              <p>
                Length:
                {' ' + opt.attributes.length}
                {opt.attributes.distance_unit}
              </p>
              <p>
                Weight:
                {' ' + opt.attributes.weight}
                {opt.attributes.mass_unit}
              </p>
            </label>
          )
        );
      })}
    </div>
  );
};

export default PersonalInfoSkydropx;
