import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// 全局数据store
import store from '../src/redux/store';

import './static/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

render(
    <Router>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>,
    document.getElementById('root')
);


//     "start": "react-scripts start",  "build": "react-scripts build", "test": "react-scripts test",