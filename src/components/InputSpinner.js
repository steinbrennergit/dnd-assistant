import React, { Component } from 'react';
import './styles/InputSpinner.css';

/*
*
* Interface for a InputSpinner component:
*   Plus and Minus buttons (left)
*   Text field (1-2 digit number, middle)
*   Image (indicating which kind of die, right)
*   Roll button?
*
*/

class InputSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0
        }
        this.incrementInput = this.incrementInput.bind(this);
        this.decrementInput = this.decrementInput.bind(this);
    }

    incrementInput() {
        this.setState({
            input: this.state.input + 1
        })
    }

    decrementInput() {
        if (this.state.input > 0) {
            this.setState({
                input: this.state.input - 1
            })
        }
    }

    render() {
        return (
            <div className="flex-row">
                <div className="dice-roller">
                    <div className="flex-column">
                        <button className="roller-box" onClick={this.incrementInput}><i className="large material-icons">add</i></button>
                        <button className="roller-box" onClick={this.decrementInput}><i className="large material-icons">remove</i></button>
                    </div>
                    <div className="flex-column">
                        <input className="roller-box" value={this.state.input}></input>
                        <div className="roller-box dice-info">{this.props.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputSpinner;
