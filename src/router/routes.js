/* eslint-disable prettier/prettier */
import Home from '../views/Home/Home';
import Error404 from '../views/Error404/Error404';
import SplashStartSkydropx from '../components/splash-start-skydropx/SplashStartSkydropx';
import InfoPageSearchMovie from '../views/InfoPageSearchMovie/InfoPageSearchMovie';
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
    name: 'InfoPageSearchMovie',
    url: '/movie',
    path: '/movie/:id',
    component: InfoPageSearchMovie,
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
