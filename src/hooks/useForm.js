import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';
import { apiPostShipments } from '../utils/routes';

const useForm = (validate) => {
  const [store, dispatch] = useContext(StoreContext);
  const { dataShipments, postDataShipments } = store;
  const [values, setValues] = useState({
    codeZipOrigin: '',
    codeZipDestination: '',
    weightPerPackageInKg: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const deep = JSON.parse(JSON.stringify(dataShipments));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    //
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch({
        type: types.postDataShipmentsSuccess,
        payload: {
          step: 2,
          postDataShip: {
            ...deep,
            address_from: { ...deep?.['address_from'], zip: values?.codeZipOrigin },
            address_to: { ...deep?.['address_to'], zip: values?.codeZipDestination },
            parcels: [
              ...deep?.['parcels']?.map((data) => {
                if (data.weight) {
                  data.weight = values?.weightPerPackageInKg;
                }
                return data;
              })
            ]
          }
        }
      });
      apiPostShipments(
        JSON.stringify({
          ...deep,
          address_from: { ...deep?.['address_from'], zip: values?.codeZipOrigin },
          address_to: { ...deep?.['address_to'], zip: values?.codeZipDestination },
          parcels: [
            ...deep?.['parcels'].map((data) => {
              if (data.weight) {
                data.weight = values?.weightPerPackageInKg;
              }
              return data;
            })
          ]
        })
      ).then((res) => {
        dispatch({
          type: types.getTableOptionsSuccess,
          payload: res
        });
        dispatch({
          type: types.getLoadingSuccess,
          payload: false,
          payloadShow: true
        });
        localStorage.setItem('OPTIONSHIP', JSON.stringify(res));
      });
      dispatch({
        type: types.getDataSkyAdviceSuccess,
        payload: values
      });
      dispatch({
        type: types.getLoadingSuccess,
        payload: true
      });

      dispatch({
        type: types.getIsSubmittedSuccess,
        payload: true
      });
      dispatch({
        type: types.getTableOptionsSuccess,
        payload: []
      });
      dispatch({
        type: types.getErrorSuccess,
        payload: []
      });
      history.push({
        pathname: `/shipments`
      });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
