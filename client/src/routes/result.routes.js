import NewResultPage from '../pages/NewResultPage';
import AllResultPage from '../pages/AllResultPage';
var resultRoute = [
    {
        path: "/result/all",
        exact: false,
        component: AllResultPage
      },
      {
        path: "/result/new",
        exact: false,
        component: NewResultPage
      }
]
export default resultRoute 