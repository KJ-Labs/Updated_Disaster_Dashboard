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
  let finalData =  []
for (var i = 0 ; i < 5; i++) {
let meteroids =
{Name: apiData[i].name ,
Potentially_Hazerdous: apiData[i].is_potentially_hazardous_asteroid,
Orbiting_Body : apiData[i].close_approach_data[0].orbiting_body,
Diameter_Miles: apiData[i].estimated_diameter.miles,
Earth_Miss_Distance_Miles: apiData[i].close_approach_data[0].miss_distance.miles,
Velocity_Miles: apiData[i].close_approach_data[0].relative_velocity.kilometers_per_hour
}
finalData.push(meteroids)
}
this.setState({
  apiResults: finalData
})
  })
  .catch(error => console.log('error', error));
  }





  render() {
    return(
      <div className='card-item'>
        { <p>{ JSON.stringify(this.state.apiResults)}</p> }

      </div>
    );
  }
}


export default Meteroid;
