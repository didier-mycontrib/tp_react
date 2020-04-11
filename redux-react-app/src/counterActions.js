import * as types from './actionsTypesConstants'

//this file contains "actions creators" functions:
//each "created actions" is sort of "command/action description":

export const createIncrementCounterAction = () => ({
	type: types.INCREMENT_COUNTER
})


export const createDecrementCounterAction = () => ({
	type: types.DECREMENT_COUNTER
})
