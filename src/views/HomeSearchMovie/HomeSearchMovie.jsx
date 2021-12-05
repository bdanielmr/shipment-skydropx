/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './homeSearchMovie.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';
import HeaderSkydropx from '../../components/header_skydropx/HeaderSkydropx';
const HomeSearchMovie = (props) => {
  const [store] = useContext(StoreContext);
  const { listMovies, paginationList } = store;
  const history = useHistory();
  useEffect(() => {
    const params = new URLSearchParams();
    if (paginationList && paginationList?.page > 1 && paginationList.component !== 'search') {
      params.append('trending', paginationList?.page);
    } else if (
      paginationList &&
      paginationList?.page > 1 &&
      paginationList.component === 'search'
    ) {
      params.append('search', paginationList?.find);
      params.append('page', paginationList?.page);
    } else {
      params.delete('trending');
      params.delete('search');
      params.delete('page');
    }
    history.push({ search: params.toString() });
  }, [paginationList, history]);

  return (
    <>
      <HeaderSkydropx />
    </>
  );
};

HomeSearchMovie.propTypes = {};

export default HomeSearchMovie;
