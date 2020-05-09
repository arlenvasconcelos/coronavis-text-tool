//import pages
import Searched from '../pages/Searched';
import Questions from '../pages/Questions';
import SuggestedTopics from '../pages/SuggestedTopics';

const routes = [
  {
    path: "/questions/:id/answers",
    component: Questions
  },
  {
    path: "/home",
    component: Searched
  },
  // {
  //   path: "/featured",
  //   component: SuggestedTopics
  // }
]

export default routes;
