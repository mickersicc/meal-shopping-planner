import React from 'react';
import { Provider } from 'react-redux';

import Layout from './containers/layout/Layout';
import { store, history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
