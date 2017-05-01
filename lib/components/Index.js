import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

ReactDOM.render(
  <App articles={window.initialData.articles} />,
  document.getElementById("react"),
);