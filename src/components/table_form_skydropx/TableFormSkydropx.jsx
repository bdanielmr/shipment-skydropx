import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import styles from './tableFormSkydropx.module.scss';
const TableFormSkydropx = ({ options, tableOption }) => {
  const [store] = useContext(StoreContext);
  const { tableOptions } = store;
  console.log('tableOptions?.data?.included', tableOptions.included);
  return (
    <div className={styles['table-form-skydropx']}>
      <div id="app" className={styles['wrapper']}>
        <h2>Definition List</h2>
        <div className={styles['term-grid'] + ' ' + styles['grid-header']}>
          {!!options &&
            options.map((opt, index) => {
              return <label key={opt?.option}>{opt.option}</label>;
            })}
        </div>
        {tableOptions?.included?.map((opt, ind) => {
          return (
            <div key={ind} className={styles['term-grid']}>
              <label>d$</label>
              <div className={styles['definition']}>skydropx</div>
              <div className={styles['alternate']}>fhl</div>
              <div className={styles['alternate']}>5</div>
              <div className={styles['alternate']}>128</div>
            </div>
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
    { option: 'Total Cost' }
  ],
  tableOption: [{}]
};
export default TableFormSkydropx;
