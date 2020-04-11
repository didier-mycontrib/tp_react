import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ItemComponent } from './ItemComponent';
import * as MyActions from './itemActions'

const mapStateToProps = (state)=>{
    return {
        itemFields  : state.myItems.itemFields , 
		items : state.myItems.items
    }
}


const mapDispatchToProps = (dispatch) => {
	  return {
      onInitItems: () => { dispatch(MyActions.createInitItemsAction()) },
	  onDeleteItems: (id) => { dispatch(MyActions.createDeleteItemAction(id)) },
	  onAddItem: (item) => { dispatch(MyActions.createAddItemAction(item)) }
    }
}

const ItemContainer = connect(
	mapStateToProps ,
	mapDispatchToProps
)(ItemComponent)

export default ItemContainer