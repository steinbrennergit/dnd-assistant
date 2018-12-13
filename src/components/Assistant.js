import React, { Component } from 'react';
import DiceRoll from './DiceRoller';
import './styles/Assistant.css';
import './styles/bootstrap.min.css';
import './styles/icon.css';

class Assistant extends Component {
  render() {
    return (
      <div>
        <DiceRoll />
      </div>
    );
  }
}

export default Assistant;
