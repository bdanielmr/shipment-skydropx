/* eslint-disable prettier/prettier */
import HomeSearchMovie from '../views/HomeSearchMovie/HomeSearchMovie';
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
    name: 'HomeSearchMovie',
    url: '/home',
    path: '/home',
    component: HomeSearchMovie,
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
