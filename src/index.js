import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxView from './component/reduxView';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import nameReducers from './reducers/reducers';
import fruitReducers from './reducers/fruitReducers';

const rootReducer = combineReducers({
    name: nameReducers,
    fruit: fruitReducers
})

const composeEnhancers = compose;
const store = createStore(rootReducer, { name: 'shubhangi', fruit: ['apple', 'mango'] }, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store} >
    <ReduxView />
</Provider>, document.getElementById('root'));

