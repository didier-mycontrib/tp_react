import React from 'react'
import {MyTogglePanel} from './my-toggle-panel'

export class DevisesComponent extends React.Component {
	
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'http://localhost:8282/devise-api/public/devise'
     //with cross origin authorized access and served by tp_node_js/backend-tp-api
    fetch(url)
      .then(responseResult => responseResult.json())
      .then(resultObject => {
		console.log(JSON.stringify(resultObject));
        this.setState({
          data: resultObject,
        })
      })
  }
  render() {
	 const { data } = this.state;

    const liList = data.map((entry, index) => {
	  //const deviseAsJsonString = JSON.stringify(entry);
      //return <li key={index}>{deviseAsJsonString}</li>
	  return <li key={index}> [{entry.code}] {entry.name} {entry.change}</li>
    })

	  
    return (
      <div>
        <h3>devises list (fetch from rest api)</h3>
		<ul>{liList}</ul>
      </div>
    )
  }
}
