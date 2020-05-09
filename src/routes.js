//import pages
import Searched from './pages/Searched';
import Answers from './pages/Answers';

const routes = [
  {
    path: "/answers/:id",
    component: Answers
  },
  {
    path: "/searched",
    component: Searched
  }
]

export default routes;
