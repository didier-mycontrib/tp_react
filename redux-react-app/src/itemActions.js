import * as types from './actionsTypesConstants'

//this file contains "actions creators" functions:
//each "created actions" is sort of "command/action description":

export const createInitItemsAction = () => ({
	type: types.INIT_ITEMS
})

export const createAddItemAction = (obj, cat = 'default') => ({
	type: types.ADD_ITEM,
	obj,
	cat
})

export const createDeleteItemAction = (id) => ({
	type: types.DELETE_ITEM,
	id
})

export const createSetConfirmOptionAction = (isActivated) => ({
	type: types.SET_CONFIRM_OPTION,
	isActivated
})