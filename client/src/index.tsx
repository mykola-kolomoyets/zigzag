import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './localization';
import Loading from './components/loading';
import Summary from './components/summary';
import Wrapper from './components/wrapper';

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
