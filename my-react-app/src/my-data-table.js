import React ,  { Component } from 'react';

export class MyDataTable extends Component{
  render() {
	  const { data , columnNames } = this.props;

	  const thList = columnNames.map((colName,index) => {
          return ( <th key={index}>{colName}</th> );
	  });
	  const headerRow =  <tr>{thList}<th>action</th></tr>;
	  
	  const dataRows = data.map((row, index) => {
		  const tdList = [];
		  for (const [index, colName] of columnNames.entries()) {
			tdList.push(<td key={index}>{row[colName]}</td>)
		  }
          return (
		   <tr key={index} >
		     {tdList}
		     <td>
			   <input type="button" value="delete"
  			       onClick={() => this.props.onDelete(index)} />
             </td>
		   </tr>
		  );
	  });
	  
	  return (
	  <div>
		<table border='1'>
		   <thead>
		     {headerRow}
		   </thead>
		   <tbody>
		     {dataRows}
		   </tbody>
		</table>
	  </div>
	  );
  }
}; 
