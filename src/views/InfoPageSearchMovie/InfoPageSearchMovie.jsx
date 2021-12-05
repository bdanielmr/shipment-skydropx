/* eslint-disable react/display-name */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './infoPageSearchMovie.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { apiGetInfoMovie } from '../../utils/routes';
import { useFetch } from '../../hooks/useFetch';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
const InfoPageSearchMovie = memo(({ match }) => {
  const history = useHistory();
  const getParams = useParams();

  const { data: getList, loading } = useFetch(apiGetInfoMovie, getParams);

  return <>hola</>;
});

InfoPageSearchMovie.propTypes = {
  match: PropTypes.object
};

export default InfoPageSearchMovie;
