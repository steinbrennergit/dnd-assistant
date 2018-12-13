import React, { Component } from 'react';
import DiceRoll from './DiceRoller';
import './styles/Assistant.css';
import './styles/bootstrap.min.css';
import './styles/icon.css';

class Assistant extends Component {
  render() {
    return (
      <div>
        <DiceRoll numSides="20" />
        <DiceRoll numSides="12" />
        <DiceRoll numSides="10" />
        <DiceRoll numSides="8" />
        <DiceRoll numSides="6" />
        <DiceRoll numSides="4" />
        <DiceRoll numSides="3" />
        <DiceRoll numSides="2" />
        <DiceRoll numSides="%" />
      </div>
    );
  }
}

export default Assistant;
