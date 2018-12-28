import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './conponents/App';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
