import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
