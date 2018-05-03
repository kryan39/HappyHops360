import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import { createStore } from 'redux';
//import myApp from './reducers';
//import Root from './components/Root'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//const store = createStore(myApp);

//ReactDOM.render(
//  <Root store={store}/>,
//  document.getElementById('root')
//);
 //registerServiceWorker();

