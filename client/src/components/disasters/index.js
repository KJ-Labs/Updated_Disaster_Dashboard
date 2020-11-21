import API from "../../utils/API";
import React from 'react';

class Disasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disasters: []
    };
  }

  componentDidMount() {
    API.getDisasters()
      .then(res => this.setState({ disasters: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.disasters.map((disaster, index) => (
          <li key={index}>
            {disaster.title} {disaster.geometry} {disaster.date} {disaster.category}
          </li>
        ))}
      </div>
    );
  }
}

export default Disasters;
