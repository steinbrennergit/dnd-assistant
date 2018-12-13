import React, { Component } from 'react';
import './styles/DiceRoller.css';

/*
*
* Interface by a DiceRoll component:
*   Plus and Minus buttons (left)
*   Text field (1-2 digit number, middle)
*   Image (indicating which kind of die, right)
*   Roll button?
*
*/

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numDice: 0,
            numSides: parseInt(props.numSides)
        }
        this.incrementDice = this.incrementDice.bind(this);
        this.decrementDice = this.decrementDice.bind(this);
    }

    incrementDice() {
        this.setState({
            numDice: this.state.numDice + 1
        })
    }

    decrementDice() {
        if (this.state.numDice > 0) {
            this.setState({
                numDice: this.state.numDice - 1
            })
        }
    }

    render() {
        return (
            <div className="flex-row">
                <div className="dice-roller">
                    <div className="flex-column">
                        <button className="roller-box" onClick={this.incrementDice}><i className="large material-icons">add</i></button>
                        <button className="roller-box" onClick={this.decrementDice}><i className="large material-icons">remove</i></button>
                    </div>
                    <div className="flex-column">
                        <input className="roller-box" value={this.state.numDice}></input>
                        <div className="roller-box dice-info">D{this.props.numSides}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DiceRoller;
