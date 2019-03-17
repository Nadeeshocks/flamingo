import React from 'react';
import Layout from '../layout/layout';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import store from '../../config/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App;