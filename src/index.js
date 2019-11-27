import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import stores from './stores';
import App from './components/app';

const rootReducer = combineReducers({
    ctr: reducer,
    res: stores
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
