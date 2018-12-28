import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import { Home,Products,Carts } from './conponents'
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
	<Router>
		<Home></Home>
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
