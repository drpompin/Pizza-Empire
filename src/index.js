import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cartReducer from './redux/reducers/cartReducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
// const store = createStore(cartReducer)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('root')
);
