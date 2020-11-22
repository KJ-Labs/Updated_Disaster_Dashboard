import React from 'react';

class Stocks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey: 'goldapi-g8eiukhi5pe0t-io',
      apiResults: '',

    }

  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-g8eiukhi5pe0t-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then(response => response.text())
  .then(result => this.setState({apiResults: JSON.parse(result)}))
  .catch(error => console.log('error', error));

  }

  render() {
    return(
      <div className='card-item'>
          <h1>{ '$' +  this.state.apiResults.price + ' USD'}  </h1>

      </div>
    );
  }
}



export default Stocks;
