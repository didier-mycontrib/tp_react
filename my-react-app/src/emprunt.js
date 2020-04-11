import React ,  { Component } from 'react';

export class MyEmprunt extends Component{
  constructor(props) {
    super(props);
    this.state = {montant: 0, nbMois:20, taux:0 , mensualite : 0};
  }
  
  recalculerMensualite(){
	  const t = this.state.taux / 12 / 100.0 ;
	  const m = this.state.montant * t / ( 1 - Math.pow(1+t , - this.state.nbMois ) );
	  this.setState({ mensualite : m });
  }

  handleChange(keyName,evt) {
	this.setState({[keyName]: evt.target.value} ,
	              ()=>{
						console.log("state (before recalculerMensualite)=" + JSON.stringify(this.state));
						this.recalculerMensualite();
				  });
  }

  render() {
    return (<div>
      <label htmlFor="montant">montant:</label> <input id="montant" type="text" value={this.state.montant} 
	                         onChange={(e)=>this.handleChange('montant',e)} /> <br/>
	  duree (nbMois): <input type="text" value={this.state.nbMois} 
	                         onChange={(e)=>this.handleChange('nbMois',e)} /> <br/>
	  taux interet annuel(%): <input type="text" value={this.state.taux} 
	                         onChange={(e)=>this.handleChange('taux',e)} /> <br/>
	  {this.state.mensualite!=0 ? ( 
	      <span>mensualite: {this.state.mensualite} </span> 
	      ) : (  <span><i>pas de mensualite calculee</i></span>   )
	  }
	  </div>
    );
  }
}; 
