import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router ,
         Route ,} from 'react-router-dom';
import ConfigRoute from './route';
import reducer from './reducers';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <ConfigRoute/>
    </Provider>,
    document.getElementById('container')
)