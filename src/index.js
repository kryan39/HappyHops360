import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createStore } from 'redux';
//import myApp from './reducers';
//import Root from './components/Root'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

