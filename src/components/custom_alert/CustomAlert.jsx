import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { StoreContext } from '../../store/StoreProvider';
const CustomAlert = (props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { ratesOrder, errorGlobal } = store;
  console.log('CARD ERRO', errorGlobal);
  useEffect(() => {
    console.log('repetir card', errorGlobal);
  }, [errorGlobal]);
  const { data: dataError } = !!errorGlobal && errorGlobal;
  const { attributes: dataErrorMessage } = !!dataError && dataError;
  const { error_message: messageError } = !!dataErrorMessage && dataErrorMessage;
  console.log('messageError', messageError);
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      {(!!errorGlobal?.message || errorGlobal?.data?.attributes.status === 'ERROR') && (
        <p style={{ background: 'red', height: '30px', margin: '5px 0px', color: 'white' }}>
          {errorGlobal?.message}
          {!!messageError &&
            messageError?.map((res, index) => {
              return res?.message;
            })}
        </p>
      )}
    </div>
  );
};

CustomAlert.propTypes = {};

export default CustomAlert;
