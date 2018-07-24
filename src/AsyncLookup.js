import React from 'react';
import { asyncComponent } from 'react-async-component';

import Loading from './Loading';

export default asyncComponent({
  resolve: () => import('./Lookup'),
  LoadingComponent: () => <Loading />,
});
