import React, { Component } from 'react';
import InputSpinner from './InputSpinner';
import './styles/DiceRoller.css';

class DiceRoller extends Component {
    render() {
        return (
            <tr>
                <td>
                    <InputSpinner name={"D" + this.props.numSides} />
                </td>
                <td>
                    <InputSpinner name="+/-" />
                </td>
                <td>
                    <button className="roll-button">ROLL</button>
                </td>
            </tr>
        );
    }
}

export default DiceRoller;
