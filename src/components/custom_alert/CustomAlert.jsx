/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import { StoreContext } from '../../store/StoreProvider';

const CustomAlert = (props) => {
  const [store] = useContext(StoreContext);
  const { errorGlobal, showComponent } = store;

  const { data: dataError } = !!errorGlobal && errorGlobal;
  const { attributes: dataErrorMessage } = !!dataError && dataError;
  const { error_message: messageError } = !!dataErrorMessage && dataErrorMessage;

  return (
    <div>
      {showComponent &&
        (!!errorGlobal?.message || errorGlobal?.data?.attributes.status === 'ERROR') && (
          <div
            style={{
              background: 'red',
              height: '25px',
              width: '100%',
              color: 'white',
              fontWeight: '800'
            }}
          >
            {errorGlobal?.message}
            {!!messageError &&
              messageError?.map((res, index) => {
                return res?.message;
              })}
          </div>
        )}
    </div>
  );
};

CustomAlert.propTypes = {};

export default CustomAlert;
