import React , { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { MyTva } from './tva';
import { MyEmprunt } from './emprunt';
import { PeopleComponent } from './people';
import { DevisesComponent } from './devises';
import Home from './home';

//class Component
class MyHeader extends Component{
  render() {
	  return (<header className="App-header">
        my-react-app <img src={logo} className="App-logo" alt="logo" />
		 &nbsp;&nbsp;
          <Link to="/">Home</Link>          &nbsp;&nbsp;
          <Link to="/tva">tva</Link>          &nbsp;&nbsp;
          <Link to="/emprunt">emprunt</Link>   &nbsp;&nbsp;
		  <Link to="/people">people</Link>   &nbsp;&nbsp;
		  <Link to="/devises">devises</Link>
      </header>)
  }
} 

//Simple component as arrow function :
const MyFooter = () => {
	  return <div> <hr/>myFooter </div>
} 

const MyRoutingZone = () => {
 return (
 
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/tva" component={MyTva} />
      <Route path="/emprunt" component={MyEmprunt} />
	  <Route path="/people" component={PeopleComponent} />
	  <Route path="/devises" component={DevisesComponent} />
    </div>
  
)
}
/* NB: <Link> and <Route> must be nested (indirectly) in <Router> */
/* https://codeburst.io/getting-started-with-react-router-5c978f70df91 
    pour approfondir rounting avec react */
function App() {
  return (
    <div className="container-fluid App">
	 <Router>
		<MyHeader /> 
		<hr/>
		<MyRoutingZone />
     </Router>
	
	 <MyFooter />
    </div>
  );
}

export default App;
