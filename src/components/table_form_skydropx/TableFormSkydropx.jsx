/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import styles from './tableFormSkydropx.module.scss';
const TableFormSkydropx = ({ options, tableOption }) => {
  const [store] = useContext(StoreContext);
  const { tableOptions } = store;
  const [isBackground, setIsBackground] = useState(false);
  const [activeIndex, setActiveIndex] = useState('');
  console.log('tableOptions?.data?.included', tableOptions.included);
  const handleFocus = (e, option) => {
    console.log('focus', e.target.id);
    console.log('focus', option.id);
    setIsBackground(true);
  };
  return (
    <div className={styles['table-form-skydropx']}>
      <div id="app" className={styles['wrapper']}>
        <div className={styles['term-grid'] + ' ' + styles['grid-header']}>
          {!!options &&
            options.map((opt, index) => {
              return <label key={opt?.option}>{opt.option}</label>;
            })}
        </div>
        {tableOptions?.included?.map((opt, ind) => {
          return (
            opt?.attributes?.amount_local && (
              <button
                key={ind}
                id={opt?.id}
                style={
                  ind === activeIndex
                    ? { backgroundColor: '#60d192', border: '1px solid black' }
                    : null
                }
                onClick={() => setActiveIndex(ind)}
                className={styles['term-grid']}
                onFocus={(e) => handleFocus(e, opt)}>
                <label>{opt?.attributes?.amount_local}$</label>
                <div className={styles['definition']}>{opt?.attributes?.provider}</div>
                <div className={styles['alternate']}>{opt?.attributes?.service_level_name}</div>
                <div className={styles['alternate']}>{opt?.attributes?.days}</div>
                <div className={styles['alternate']}>{opt?.attributes?.total_pricing}$</div>
              </button>
            )
          );
        })}
      </div>
    </div>
  );
};

TableFormSkydropx.propTypes = {
  options: PropTypes.array,
  tableOption: PropTypes.array
};
TableFormSkydropx.defaultProps = {
  options: [
    { option: 'Rate' },
    { option: 'Provider' },
    { option: 'Service' },
    { option: 'Shipping Days' },
    { option: 'Total Price' }
  ],
  tableOption: [{}]
};
export default TableFormSkydropx;
