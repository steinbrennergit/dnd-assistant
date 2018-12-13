import React, { Component } from 'react';
import DiceRoller from './DiceRoller';
import './styles/Assistant.css';
import './styles/bootstrap.min.css';
import './styles/icon.css';

class Assistant extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: "#EEEEEE", paddingBottom: "15px" }}>
        <table>
          <DiceRoller numSides="20" />
          <DiceRoller numSides="12" />
          <DiceRoller numSides="10" />
          <DiceRoller numSides="8" />
          <DiceRoller numSides="6" />
          <DiceRoller numSides="4" />
        </table>
        <div className="output">
        </div>
      </div>
    );
  }
}

export default Assistant;
