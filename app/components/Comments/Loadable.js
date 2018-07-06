/**
 *
 * Asynchronously loads the component for Comments
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Comments" */ './index'),
  loading: () => null,
});
