//import pages

import SuggestedTopics from '../pages/Tools/SuggestedTopics';

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
