import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { MyDataTable } from './my-data-table';



export class PeopleComponent extends Component {
  constructor(){
   super();
   this.state = { 
      peopleFields : [ 'firstName' , 'lastName' ],
      peoples : [ { firstName : 'jean' , lastName : 'Bon' } ,
				  { firstName : 'alain' , lastName : 'Therieur' },	
                  { firstName : 'alex' , lastName : 'Therieur' },
				  { firstName : 'axelle' , lastName : 'Aire' } ]
   };
  }	
  
  onDeletePeople(index){
	  const peoples = this.state.peoples;
	  this.setState({
         peoples: peoples.filter((p, i) => { return i !== index }) 
		 });
  }
	
  render() {
	return (
	<div>
		<h3 className="App">people list</h3>  
		<MyDataTable columnNames={this.state.peopleFields}
		                data={this.state.peoples}
                        onDelete={(index)=>{this.onDeletePeople(index);}}	/>
	</div>
	)
  }
}

