import React from 'react';

class Meteroid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey: 'goldapi-g8eiukhi5pe0t-io',
      apiResults: [],
      updatedResults: []

    }
  }

componentDidMount() {
    this.loadData(),
    this.otherFunction()

  }

loadData() {
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-09-17&end_date=2020-09-17&api_key=Xb92XHUJvws2bncI1waLvjbgwiVnIiukwsFsRIXt", requestOptions)
  .then(response => response.text())
  .then(result => this.setState({apiResults: JSON.parse(result)}))
  .catch(error => console.log('error', error));
  }

  otherFunction() {
    this.setState({apiResults: this.state.apiResults.near_earth_objects})
this.setState({updatedResults: apiResults.slice(1,3)})
  }

  render() {

    return(
      <div className='card-item'>
        {<h1>Space Data Here </h1>}

        { <h1>{ 'Space ' + JSON.stringify(this.state.updatedResults)}</h1> }
      </div>
    );
  }
}


export default Meteroid;
