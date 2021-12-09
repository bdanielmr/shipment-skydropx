import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';

import styles from './cardShipment.module.scss';

const CardShipment = () => {
  const [store, dispatch] = useContext(StoreContext);
  const { ratesOrder, errorGlobal } = store;
  const params = useParams();
  const { data } = ratesOrder;
  const { attributes: atData } = !!data && data;
  const { error_message: setError } = !!atData && atData;
  console.log('error', setError);

  function RenderError() {
    () =>
      dispatch({
        type: types.getErrorSuccess,
        payload: setError
      });
  }

  return (
    <>
      {!setError ? (
        <>
          {!!atData &&
            /** this needs to refac aint not proud aboud this xd */
            Object?.keys({ title_card: `Success information package`, ...atData })?.map(
              (obj, i) => {
                return (
                  atData?.[obj] !== null && (
                    <div
                      id={i}
                      style={
                        i === 0
                          ? {
                              backgroundColor: 'palegreen',
                              border: '1px solid black',
                              bottom: '1px',
                              fontWeight: '600'
                            }
                          : null
                      }
                      className={styles['custom-card-shipment-container']}>
                      {`
                    ${
                      obj === 'title_card'
                        ? ''
                        : obj
                            .split('_')
                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(' ')
                    }`}
                      <div key={i} className={styles['custom-card-shipment']}>
                        <div>{`${
                          typeof atData?.[obj] === 'undefined'
                            ? 'Shipment Success'
                            : obj === 'created_at' || obj === 'updated_at'
                            ? atData?.[obj]?.slice(0, 10)
                            : atData[obj]
                        }`}</div>
                      </div>
                    </div>
                  )
                );
              }
            )}
          {atData?.tracking_url_provider && (
            <iframe src={atData?.tracking_url_provider} height="500px" width="50%" />
          )}
        </>
      ) : (
        RenderError()
      )}
    </>
  );
};

export default CardShipment;
