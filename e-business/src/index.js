import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';       //引入主组件
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
