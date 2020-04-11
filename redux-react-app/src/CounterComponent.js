import React from 'react';

export class CounterComponent extends React.Component{
	
render(){
  return (
    <div>
      <h3>counter:{this.props.counterValue}</h3>
	  <input type="button" value="+" onClick={()=>{this.props.onIncrementCounter()}} /> &nbsp;
	  <input type="button" value="-" onClick={()=>{this.props.onDecrementCounter()}} /> &nbsp;
    </div>
  );
}

}
