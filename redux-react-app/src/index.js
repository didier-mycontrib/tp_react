import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { myRootReducer } from './myCombinedRootReducer' ;
import { createIncrementCounterAction ,
         createDecrementCounterAction} from './counterActions' ;

// Create a Redux store holding the global state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(myRootReducer);
//NB: all nested reducers in combined "myRootReducer" 
// will be automatically called here
// to initialize each "substate" with a @@redux/INIT... action 
// and with default value of (sub)state .

console.log("**initial global state="+JSON.stringify(store.getState()));

const unsubscribeLog = store.subscribe(() => console.log(">>global state="+JSON.stringify(store.getState())))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(createIncrementCounterAction());
store.dispatch(createDecrementCounterAction());

unsubscribeLog();


ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
