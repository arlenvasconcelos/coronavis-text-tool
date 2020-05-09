//import pages
import Searched from '../pages/Searched';
import Answers from '../pages/Questions';
import SuggestedTopics from '../pages/SuggestedTopics';

const routes = [
  {
    path: "/answers/:id",
    component: Answers
  },
  {
    path: "/searched",
    component: Searched
  },
  {
    path: "/featured",
    component: SuggestedTopics
  }
]

export default routes;
