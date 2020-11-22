import React from 'react';

class Meteroid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey: 'Xb92XHUJvws2bncI1waLvjbgwiVnIiukwsFsRIXt',
      apiResults: [],
      todayDate: new Date().toISOString().slice(0,10),
    }
  }
componentDidMount() {
    this.loadData()
  }

loadData() {
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.todayDate}&end_date=${this.state.todayDate}&api_key=${this.state.apiKey}`, requestOptions)
  .then(response => response.text())
  .then(result => this.setState({apiResults: JSON.parse(result)}))
  .then(result => {
  var apiData = this.state.apiResults.near_earth_objects[this.state.todayDate.toString()]

for (var i = 0 ; i < 5; i++) {
let finalData =  []
console.log(apiData[0])
finalData.push(apiData[i].name)

  this.setState({
    apiResults: finalData
  })

//console.log(this.state.apiResults[0].close_approach_data[0].orbiting_body)
//console.log(this.state.apiResults[0].name)
//console.log(this.state.apiResults[0].is_potentially_hazardous_asteroid)
//console.log(this.state.apiResults[0].estimated_diameter.kilometers)
//console.log(this.state.apiResults[0].estimated_diameter.miles)
//console.log(this.state.apiResults[0].close_approach_data[0].relative_velocity.miles_per_hour)
//console.log(this.state.apiResults[0].close_approach_data[0].relative_velocity.kilometers_per_hour)
//console.log(this.state.apiResults[0].close_approach_data[0].miss_distance.kilometers)
//console.log(this.state.apiResults[0].close_approach_data[0].miss_distance.miles)
//console.log(this.state.apiResults[0].nasa_jpl_url)

}
  })
  .catch(error => console.log('error', error));
  }

  render() {
    return(
      <div className='card-item'>
        { <p>{ JSON.stringify(this.state.apiResults[0])}</p> }
        { <p>{ JSON.stringify(this.state.apiResults[1])}</p> }
      </div>
    );
  }
}


export default Meteroid;
