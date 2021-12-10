/* eslint-disable prettier/prettier */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';

import styles from './cardShipment.module.scss';

const CardShipment = () => {
  const [store, dispatch] = useContext(StoreContext);
  const { ratesOrder } = store;

  const { data } = ratesOrder;
  const { attributes: atData } = !!data && data;
  const { error_message: setError } = !!atData && atData;

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
                console.log('atData?.[obj]', atData?.[obj]);
                return (
                  atData?.[obj] !== null &&
                  atData?.[obj] !== atData?.label_url && (
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
                      obj === 'title_card' || obj === 'label_url'
                        ? ''
                        : obj
                            .split('_')
                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(' ')
                    }`}
                      <div key={i} className={styles['custom-card-shipment']}>
                        <div key={i}>{`${
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
            <>
              {atData?.label_url && (
                <span
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  pdf:{' '}
                  <a
                    style={{
                      padding: '0px 20px ',
                      display: 'flex',
                      width: '45%'
                    }}
                    target="_blank"
                    href={atData?.label_url}
                    rel="noreferrer">
                    {atData?.label_url}
                  </a>
                </span>
              )}
              <iframe src={atData?.tracking_url_provider} height="500px" width="50%" />
            </>
          )}
        </>
      ) : (
        RenderError()
      )}
    </>
  );
};

export default CardShipment;
