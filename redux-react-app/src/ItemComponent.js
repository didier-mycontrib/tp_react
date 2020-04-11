import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { MyDataTable } from './my-data-table';



export class ItemComponent extends Component {
  constructor(props){
   super(props);
   this.newItem= { firstName : null , lastName : null };
   props.onInitItems(); //with reducers (dispach map in decorator ItemContainer)
  }	
  
  reinitNewItem(){
	  this.newItem= { firstName : null , lastName : null };
	  document.getElementById('firstName').value=null;
	  document.getElementById('lastName').value=null;
  }
  
	
  render() {
	return (
	<div>
	  <div className="row">
	   <div className="col-sm-6">
		<h3 className="App">item list</h3>  
		<MyDataTable columnNames={this.props.itemFields}
		                data={this.props.items}
                        onDelete={(index)=>{this.props.onDeleteItems(index);}}	/>
	   </div>
	   <div className="col-sm-6">
	     <h3 className="App">new_item</h3>  
		 firstName: <input id="firstName" onChange={(e)=>{this.newItem.firstName=e.target.value;}} /><br/>
		 <p></p>
		 lastName : <input id="lastName" onChange={(e)=>{this.newItem.lastName=e.target.value;}}		 /><br/>
		 <p></p>
		 <input type="button" value="add new item" 
		  onClick={()=>{if(this.newItem.firstName != null && this.newItem.lastName != null) {
			             this.props.onAddItem(this.newItem); 
		                 this.reinitNewItem();}
						}} />
	    </div>
	  </div>
	</div>
	)
  }
}


