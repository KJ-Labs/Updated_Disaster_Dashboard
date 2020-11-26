import { SIGCHLD } from 'constants';
import React from 'react';
import { bubble	 as Menu } from 'react-burger-menu';
import ReadyKit from "../readykit";
export default props => {
  return (
    <Menu>
      <h1>Prepared?</h1>
      <div className="menu-item" >
     <ReadyKit/>
      </div>
      <h1>Other Data</h1>
      <a className="menu-item" href="https://kj-labs.github.io/Earthquake_Tracker">
        Earthquake Tracker - Project 1
      </a>
      <a className="menu-item" href="https://vent-tracker.herokuapp.com/">
        Air Quality Tracker - Project 2
      </a>
    </Menu>
  );
};
