import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

const useForm = (callback, validate) => {
  const [, dispatch] = useContext(StoreContext);
  const [values, setValues] = useState({
    codeZipOrigin: '',
    codeZipDestination: '',
    weightPerPackageInKg: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      dispatch({
        type: types.getDataSkyAdviceSuccess,
        payload: values
      });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
