/* eslint-disable react/no-children-prop */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import routes from './routes.js';

import SuccessShipment from '../views/SuccessShipment/SuccessShipment.jsx';

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
  let location = useLocation();
  const background = location.state && location.state.background;
  const backgroundError = location.state && location.state.backgroundError;

  return (
    <>
      <Switch location={background || location}>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={`${route.path}`}
              render={(props) => <route.component {...props} routes={route.routes} />}
              exact={route.exact}
            />
          );
        })}
      </Switch>
      {background && <Route path="/shipment/:id" children={<SuccessShipment />} />}
    </>
  );
}
