import React ,  { Component } from 'react';

export class MyTva extends Component{
  constructor(props) {
    super(props);
    this.state = {ht: 0, taux:20, tva:0 , ttc : 0};
  }
  
  recalculerTvaEtTtc(){
	  /*
	  this.setState({ tva :Number(this.state.ht * this.state.taux / 100)},
	       () => { //callback for action when first state part updated
	           this.setState({ ttc :Number(this.state.ht + this.state.tva)});
		        });
	  */
	  this.setState({ tva :Number(this.state.ht * this.state.taux / 100) ,
	                  ttc :Number(this.state.ht * (1 +  this.state.taux/100))
					 });
  }

  handleChange(keyName,evt) {
    //setState() hérité de Component modifie qu'une partie de l'état en mode asynchrone	  
    //this.setState({[keyName]: Number(evt.target.value)}); //asynchrone , pas immédiat !!!
	//le second paramètre facultatif de setState() est une callback appelée qd maj effectuée
	this.setState({[keyName]: evt.target.value} ,
	              ()=>{
						console.log("state (before recalculerTvaEtTtc)=" + JSON.stringify(this.state));
						this.recalculerTvaEtTtc();
				  });
  }

  render() {
    return (<div>
      ht: <input type="text" value={this.state.ht} 
	                         onChange={(e)=>this.handleChange('ht',e)} /> <br/>
	  taux(%): <input type="text" value={this.state.taux} 
	                         onChange={(e)=>this.handleChange('taux',e)} /> <br/>
	  {this.state.tva!=0 ? ( 
	      <span>tva: {this.state.tva} ,  ttc: {this.state.ttc}</span> 
	      ) : (  <span><i>pas de tva</i></span>   )
	  }
	  </div>
    );
  }
}; 
