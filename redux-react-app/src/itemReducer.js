import * as types from './actionsTypesConstants'

//NB: the global state of the redux store (store.getState())
//is a sort or map where the keys are "reducerName or reducerKey" and values are 
// a "subState" value (number,string,object, array, ...) for a specific reducer 

//---> each reducer is associated with is own state (substate of global state)
//---> complementary REDUCERS = complementary SUBJECTS (with their own state)
//---> actions = action VERBS (with attributes/args) to apply on one or more reducer(s).
//NB: when store.dispatch(action) is called , actions are applyed on each reducer
//--> not often action.type like "UPDATE" AND action.concerned_subject_or_...="customer" or "product"
//--> often action.type lile "UPDATE_XYZ" or even "UPDATE_XYZ_REQUEST" , "UPDATE_XYZ_SUCCESS" , "UPDATE_XYZ_FAILURE"

export const confirmOption = (isActivatedSubState = true, action) => {
	//console.log(`confirmOption reducer was called with isActivatedSubState=${isActivatedSubState} and action=${JSON.stringify(action)}`);
	switch (action.type) {
		case types.SET_CONFIRM_OPTION:
			return action.isActivated
		default:
			return isActivatedSubState
	}
}

const defaultItemFields = [ 'firstName' , 'lastName' ]; 
const defaultItems = [ { firstName : 'jean' , lastName : 'Bon' } ,
				  { firstName : 'alain' , lastName : 'Therieur' },	
                  { firstName : 'alex' , lastName : 'Therieur' },
				  { firstName : 'axelle' , lastName : 'Aire' } ];

export const myItems = ( state = { itemFields: [] , items : [] }, action) => {
	//console.log(`myItems reducer was called with state=${JSON.stringify(state)} and action=${JSON.stringify(action)}`);
	switch (action.type) {
		case types.INIT_ITEMS:
			return { itemFields: defaultItemFields , items : defaultItems };
		case types.DELETE_ITEM:
		   return  { itemFields: state.itemFields , 
			    items : state.items.filter((p, i) => { return i !== action.id })  };
		case types.ADD_ITEM:
		   let new_items = state.items.slice();
		   new_items.push(action.obj);
		   const new_state =  { itemFields: state.itemFields , 
			    items : new_items  };
		    //console.log(`new_state=${JSON.stringify(new_state)}	`);
           return new_state;				
		default:
			return state;
	}
}
