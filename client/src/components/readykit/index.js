import API from "../../utils/API";
import React from 'react';

class ReadyKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readyKit: {}
    };
    API.getReadyKitByUser(this.props.username)
      .then(res => this.setState({ readyKit: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {"id: " + this.state.readyKit.id}<br></br>
        {"username: " + this.state.readyKit.currentUserName}<br></br>
        {"water: " + this.state.readyKit.water}<br></br>
        {"non perishable food: " + this.state.readyKit.non_perishable_food}<br></br>
        {"batteries: " + this.state.readyKit.batteries}<br></br>
        {"flashlight: " + this.state.readyKit.flashlight}<br></br>
        {"first aid kit: " + this.state.readyKit.first_aid_kit}<br></br>
        {"whistle: " + this.state.readyKit.whistle}<br></br>
        {"dust mask: " + this.state.readyKit.dust_mask}<br></br>
        {"moist towlettes: " + this.state.readyKit.moist_towlettes}<br></br>
        {"garbadge bags: " + this.state.readyKit.garbadge_bags}<br></br>
        {"wrench: " + this.state.readyKit.wrench}<br></br>
        {"can opener: " + this.state.readyKit.can_opener}<br></br>
        {"local map: " + this.state.readyKit.local_map}<br></br>
        {"cash: " + this.state.readyKit.cash}<br></br>
        {"medications: " + this.state.readyKit.medications}<br></br>
      </div>
    );
  }
}

export default ReadyKit;
