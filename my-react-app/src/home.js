import React from 'react'
import {MyTogglePanel} from './my-toggle-panel'
import { Tabs , Tab } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to my react app (home)</h1>
		<MyTogglePanel title="panel1">
		    <Tabs defaultActiveKey="o1" >
			    <Tab eventKey="o1" title="onglet1">
				    <div>contenu onglet 1</div>
				</Tab>
				<Tab eventKey="o2" title="onglet2">
				    <div>contenu onglet 2</div>
				</Tab>
			</Tabs>
		  
		</MyTogglePanel>
		<MyTogglePanel title="panel2">
		   <div>contenu paneau 2</div>
		</MyTogglePanel>
      </div>
    )
  }
}
export default Home