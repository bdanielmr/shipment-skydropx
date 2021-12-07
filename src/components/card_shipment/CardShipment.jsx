import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import styles from './cardShipment.module.scss';

const CardShipment = () => {
  const [store] = useContext(StoreContext);
  const { ratesOrder } = store;

  const { data } = ratesOrder;
  const { attributes: atData } = !!data && data;
  const { error_message: setError } = !!atData && atData;
  console.log('into card', setError);
  function RenderObject() {
    return Object.keys(ratesOrder?.data?.attributes).map((obj, i) => {
      console.log(obj, ratesOrder?.data?.attributes[obj], 'obj');
      return <div key={i}>{`${obj}: ${ratesOrder?.data?.attributes[obj]}`}</div>;
    });
  }
  return (
    <div className={styles['custom-card-shipment']}>
      {setError &&
        setError?.map((err, ide) => {
          return <p key={ide}>{err.message}</p>;
        })}
      {!setError && RenderObject()}
    </div>
  );
};

export default CardShipment;
