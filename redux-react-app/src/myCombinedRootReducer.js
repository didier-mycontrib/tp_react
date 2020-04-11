import { combineReducers } from 'redux';
import {counter } from './counterReducer';
import {confirmOption , myItems} from './itemReducer';

//NB: the global state of the redux store (store.getState())
//is a sort or map where the keys are "reducerName or reducerKey" and values are 
// a "subState" value (number,string,object, array, ...) for a specific reducer 

//---> each reducer is associated with is own state (substate of global state)
//---> complementary REDUCERS = complementary SUBJECTS (with their own state)
//---> actions = action VERBS (with attributes/args) to apply on one or more reducer(s).
//NB: when store.dispatch(action) is called , actions are applyed on each reducer
//--> not often action.type like "UPDATE" AND action.concerned_subject_or_...="customer" or "product"
//--> often action.type lile "UPDATE_XYZ" or even "UPDATE_XYZ_REQUEST" , "UPDATE_XYZ_SUCCESS" , "UPDATE_XYZ_FAILURE"


export const myRootReducer = combineReducers({
	counter ,
	confirmOption ,
	myItems
})


/*
export const myRootReducer = combineReducers({
	reducerKey1 : reducerPureFunction1,
	reducerPureFunctionName2 : reducerPureFunctionName2,
	counter : counter
})
//simplified as :
export const myRootReducer = combineReducers({
    reducerPureFunctionName2,
	counter 
})
*/