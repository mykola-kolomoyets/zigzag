import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Wrapper from './components/wrapper';
import Summary from './components/summary';
import Loading from './components/loading';

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />

      <Summary />
      <Loading />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
