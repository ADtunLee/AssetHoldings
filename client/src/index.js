import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './routers/RouterIndex'
import { createStore,compose, applyMiddleware } from 'redux'
import appReducers from './reducers/index'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//create store to save all state in storage

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
)


ReactDOM.render(
    <Provider store={store}>
        <RouterIndex />
    </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
