import React, { Component } from 'react';
import ReadyKit from '../readykit';
import Gold from '../metals/gold.js';
import Silver from '../metals/silver.js';
import Meteroids from '../meteroids/meteroids.js';
import Disasters from '../../components/disasters';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims.name
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.currentUserName} !</h1>
        <br></br>

<div className ='MetalsContainer'>
        <div className  = 'row' id = 'MetalsCards'>
          <div className="col s5 m5 l5 card" id = 'gold'>
            <h3 className="mb-3 mt-3">  Gold Spot Price<img src={process.env.PUBLIC_URL + '/assets/images/goldbars.png'} /></h3>
          <Gold/>
          </div>
          <div className="col s5 m5 l5 card"  id = 'silver'>
          <h3 className="mb-3 mt-3">Silver Spot Price<img src={process.env.PUBLIC_URL + '/assets/images/silverbars.png'} /></h3>
          <Silver/>
          </div>
          </div>


          <div id='app'></div>
          <div className="card" id = 'nasa'>
    <Meteroids/>
          </div>
          <br></br>


        <div id='app'></div>
          <div className="card" id = 'disaster'>
            <h2>10 current and most recent disasters</h2>
              <Disasters></Disasters>
          </div>
          <br></br>

          <div id='app'></div>
          <div className="card" id = 'covid'>
            <h2>Covid Data Goes Here</h2>
              <p>MW Data</p>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'ReadyKit'>
            <h2>{this.state.currentUserName}'s Ready Kit</h2>
            <ReadyKit username={this.state.currentUserName}></ReadyKit>
          </div>

      </div>
      </div>

    );
  }
}

export default Dashboard;
