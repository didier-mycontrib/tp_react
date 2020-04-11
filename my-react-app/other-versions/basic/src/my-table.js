import React ,  { Component } from 'react';

export class MyTable extends Component{
  render() {
	  const { title, peoples } = this.props;	  
	  const peoplesRows = peoples.map((row, index) => {
          return (
		   <tr key={index} >
		      <td>{row.firstName}</td>
		      <td>{row.lastName}</td>
		   </tr>
		  );
	  });
	  
	  return (
	  <div>
		<h3> {title} </h3>
		<table border='1'>
		   <thead>
		     <tr><th>firstName</th><th>lastName</th></tr>
		   </thead>
		   <tbody>
		     {peoplesRows}
		   </tbody>
		</table>
	  </div>
	  );
  }
}; 
