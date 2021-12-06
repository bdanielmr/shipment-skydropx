/* eslint-disable prettier/prettier */
import Home from '../views/Home/Home';
import Error404 from '../views/Error404/Error404';
import SplashStartSkydropx from '../components/splash-start-skydropx/SplashStartSkydropx';
import InfoPageShipment from '../views/InfoPageShipment/InfoPageShipment';
export default [
  {
    name: 'SplashStartSkydropx',
    url: '/',
    path: '/',
    component: SplashStartSkydropx,
    exact: true
  },
  {
    name: 'Home',
    url: '/home',
    path: '/home',
    component: Home,
    exact: true
  },
  {
    name: 'InfoPageShipment',
    url: '/shipments',
    path: '/shipments',
    component: InfoPageShipment,
    exact: true
  },
  {
    name: 'InfoPageShipment',
    url: '/shipment',
    path: '/shipment/:id',
    component: InfoPageShipment,
    exact: true
  },
  {
    name: 'Error404',
    url: '/',
    path: '/',
    component: Error404,
    exact: false
  }
];
