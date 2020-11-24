import React, { Component } from 'react';
import ReadyKit from '../readykit';
import Gold from '../metals/gold.js';
import Silver from '../metals/silver.js';
import Meteroids from '../meteroids/meteroids.js';
import Disasters from '../../components/disasters';
import { ListItem } from "../list";

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
          <div className="col s6 m6 l6 card" id = 'gold'>
            <h3 className="mb-3 mt-3">  Gold Spot Price<img src={process.env.PUBLIC_URL + '/assets/images/goldbars.png'} alt = 'goldbars' /></h3>
            <ListItem>
          <Gold/>
          </ListItem>
          </div>
          <div className="col s6 m6 l6 card"  id = 'silver'>
          <h3 className="mb-3 mt-3">Silver Spot Price<img src={process.env.PUBLIC_URL + '/assets/images/silverbars.png'}  alt = 'silverbars' /></h3>
          <ListItem>
          <Silver/>
          </ListItem>
          </div>
          </div>


          <div id='app'></div>
          <div className="card" id = 'nasa'>
    <Meteroids/>
          </div>
          <br></br>


        <div id='app'></div>
          <div className="card" id = 'disaster'>
          <h3 className="mb-3 mt-3">Disasters<img src={process.env.PUBLIC_URL + '/assets/images/disasters.png'}  alt = 'disasters' /></h3>
              <Disasters></Disasters>
          </div>
          <br></br>

          <div id='app'></div>
          <div className="card" id = 'covid'>
          <h3 className="mb-3 mt-3">Covid Data Here<img src={process.env.PUBLIC_URL + '/assets/images/covid.png'}  alt = 'covid' /></h3>
          <ListItem>
             { console.log(`API KEY CHECK + ${process.env.REACT_APP_METALAPIS}`)}
             </ListItem>
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
