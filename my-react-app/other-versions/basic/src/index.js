import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyTable } from './my-table';
import { MyTva } from './tva';

//class Component
class MyHeader extends Component{
  render() {
	  const headerText = 'myHeader default text';
	  return <div> {headerText} </div>
  }
} 

//Simple component as arrow function :
const MyFooter = () => {
	  return <div> myHeader </div>
} 

class App extends Component {
  constructor(){
   super();
   this.appPeoples = [ { firstName : 'jean' , lastName : 'Bon' } ,
                    { firstName : 'alain' , lastName : 'Therieur' } ];
  }	
	
  render() {
	return (
	<div>
		<MyHeader />
		<h1 className="App">Hello world React</h1>  
		<MyTable title="myTitle" peoples={this.appPeoples} />
		<MyTva />
		<MyFooter />
	</div>
	)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
