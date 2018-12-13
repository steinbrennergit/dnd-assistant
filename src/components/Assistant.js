import React, { Component } from 'react';
import DiceRoll from './DiceRoll';
import './styles/Assistant.css';
import './styles/bootstrap.min.css';

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
