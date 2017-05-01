import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './components/App';
import axios from 'axios';
import config from './config';

const serverRender = async ({ endPoint }) => {
  try {
    const resp = await axios.get(`${config.host}/api/data`);

    return {
      initialData: resp.data,
      initialContent: ReactDOMServer.renderToString(
        <App articles={resp.data.articles} />
      ),
    };
  } catch(err) {
    console.error(err);
  }
};

export default serverRender;