import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/App';
import './styles.css';

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	  <Router>
	  	<App />
	  </Router>
	</Provider>
  ,document.getElementById('root')
);