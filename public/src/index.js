import React from 'react';
import ReactDOM from 'react-dom';
import Container from "./container";
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import 'styled-components'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
