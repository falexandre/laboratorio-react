import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers/';

const store = createStore(
    Reducers
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
