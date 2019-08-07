import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage'
import RouterResult from '../routers/RouterResult'
var indexRoute = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/result",
    exact: false,
    component: RouterResult
  },
  {
    path: "/map",
    exact: false,
    component: MapPage
  }
];

export default indexRoute;