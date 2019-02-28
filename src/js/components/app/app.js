import React from 'react';
import Layout from '../layout/layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App;