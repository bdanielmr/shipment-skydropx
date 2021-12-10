/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import routes from './routes.js';

import SuccessShipment from '../views/SuccessShipment/SuccessShipment.jsx';
import CustomAlert from '../components/custom_alert/CustomAlert.jsx';
import HeaderSkydropx from '../components/header_skydropx/HeaderSkydropx.jsx';
import CustomLoading from '../components/custom_loading/CustomLoading.jsx';
import { StoreContext } from '../store/StoreProvider.js';

// eslint-disable-next-line react/prop-types
export default function ViewsRouter(props) {
  return (
    <Router>
      <Views />
    </Router>
  );
}

// eslint-disable-next-line react/prop-types
function Views({ dataId, cToken, aToken, stylePa }) {
  // eslint-disable-next-line prefer-const
  const [store] = useContext(StoreContext);
  const { loadingConsult, showComponent } = store;
  let location = useLocation();
  const background = location.state && location.state.background;
  const backgroundError = location.state && location.state.backgroundError;
  console.log('loadingConsult', loadingConsult);
  return (
    <>
      {loadingConsult && <CustomLoading />}
      <HeaderSkydropx />
      {backgroundError && <Route path="/shipment/:id" children={<CustomAlert />} />}
      <Switch location={background || location}>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={`${route.path}`}
              render={(props) => <route.component {...props} routes={route.routes} />}
              exact={route.exact}
            ></Route>
          );
        })}
      </Switch>
      {background && <Route path="/shipment/:id" children={<SuccessShipment />} />}
    </>
  );
}
