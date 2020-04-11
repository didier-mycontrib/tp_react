import React ,  { Component } from 'react';
import { FaAngleDown , FaAngleUp } from 'react-icons/fa';

export class MyTogglePanel extends Component{
	
	constructor(props){
		super(props);
		this.state = { toggleP :  false };
	}
	
	toggleThisPanel(){
		this.setState( { toggleP : !this.state.toggleP });
	}
	
  render() {
	  const { title , children } = this.props;
	  const cardBodyCollapseClasses = "card-body collapse";
	  const withShowClassOrNot =  this.state.toggleP?cardBodyCollapseClasses+" show":cardBodyCollapseClasses;
	  const downOrUpIcon =  this.state.toggleP?<FaAngleUp/>:<FaAngleDown/>;
	  
	  return (
	  <div className="card">
	   <h4 className="card-header bg-secondary">
	    <a className="text-light" onClick={()=>this.toggleThisPanel()} >{title}
	      {downOrUpIcon}
		</a>
	   </h4>
		<div className={withShowClassOrNot}> 		       
			  {children}
		</div>
      </div>
	  );
  }
}; 
