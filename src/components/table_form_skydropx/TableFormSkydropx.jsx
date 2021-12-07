/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import styles from './tableFormSkydropx.module.scss';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { types } from '../../store/storeReducer';
import BadgeSkydropx from '../badge_skydropx/BadgeSkydropx';

const TableFormSkydropx = ({ options, tableOption }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { tableOptions } = store;

  const [activeIndex, setActiveIndex] = useState('');
  const [activeBadge, setActiveBadge] = useState(false);
  const [changeBackground, setChangeBackground] = useState('#60d192');
  const [getOptionShip, setGetOptionShip] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleFocus = (e, option) => {
    setGetOptionShip(option.id);
    setActiveBadge(false);
    setChangeBackground('#60d192');
  };
  const handleSubmitTable = () => {
    history.push({
      pathname: `/shipment/${getOptionShip}`,
      state: { background: location, backgroundError: location }
    });
  };

  function orderShip() {
    const auxOrder = Object.assign([], tableOptions?.included)?.filter((x) => x?.type === 'rates');
    const minDay = auxOrder.reduce(
      (prev, current) => (prev?.attributes?.days < current?.attributes?.days ? prev : current),
      1
    );
    setActiveIndex(minDay.id);
    setChangeBackground('transparent');
    setActiveBadge(true);
  }

  useEffect(() => {
    orderShip();
  }, [tableOptions]);
  console.log('activeIndex', activeIndex);
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
            opt?.type === 'rates' && (
              <button
                key={ind}
                id={opt?.id}
                style={
                  opt?.id === activeIndex
                    ? { backgroundColor: changeBackground, border: '1px solid black' }
                    : null
                }
                onClick={() => setActiveIndex(opt?.id)}
                className={styles['term-grid']}
                onFocus={(e) => handleFocus(e, opt)}
              >
                <label>{opt?.attributes?.amount_local}$</label>
                <div className={styles['definition']}>{opt?.attributes?.provider}</div>
                <div className={styles['alternate']}>{opt?.attributes?.service_level_name}</div>
                <div className={styles['alternate']}>
                  {opt?.id === activeIndex && activeBadge && <BadgeSkydropx />}
                  {opt?.attributes?.days}{' '}
                </div>
                <div className={styles['alternate']}>{opt?.attributes?.total_pricing}$</div>
              </button>
            )
          );
        })}
      </div>
      <button onClick={handleSubmitTable}>send</button>
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
