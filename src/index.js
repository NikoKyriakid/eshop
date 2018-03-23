import request from 'browser-request'

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import './index.css';
import App from './components/App';


request('/list', (err, res) => {
    if (err) {
        console.log('There was an error loading the JSON file!');
        throw er;
    }

    const products = JSON.parse(res.body).data;

    const store = createStore(rootReducer, {
        "products": products,
        "visibilityFilter": 'SHOW_ALL'
    });

    ReactDOM.render(
        <Provider store={store}>
            <App products={products}/>
        </Provider>,
        document.getElementById('app')
    ) 
});