import HomePage from '../pages/HomePage';
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
  }
];

export default indexRoute;