import React  , { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CounterContainer from './CounterContainer';
import HomeComponent from './HomeComponent';
import ItemContainer from './ItemContainer';


class MyHeader extends Component{
  render() {
	  return (<header className="App-header">
        my-react-app <img src={logo} className="App-logo" alt="logo" />
		 &nbsp;&nbsp;
          <Link to="/">Home</Link>          &nbsp;&nbsp;
          <Link to="/counter">counter</Link>          &nbsp;&nbsp;
		  <Link to="/items">items</Link>   &nbsp;&nbsp;
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
      <Route exact path="/" component={HomeComponent} />
	  <Route path="/counter" component={CounterContainer} />
	  <Route path="/items" component={ItemContainer} />
    </div>
  
)
}

class App extends React.Component{
	
render(){
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

}

export default App;
