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
    render() {
        return (
            <div className="diceRoller">
                <div className="flex-column">
                    <button><i className="large material-icons">add</i></button>
                    <button><i className="large material-icons">remove</i></button>
                </div>
                <div className="flex-column">
                    <input style={{ width: '2rem', textAlign: 'center', height: '30px' }}></input>
                    <div style={{ width: '32px', height: '30px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '30px' }}>
                    D20
                    </div>
                </div>
            </div>
        );
    }
}

export default DiceRoller;
