import React, { Component } from 'react';
import InputSpinner from './InputSpinner';
import './styles/Assistant.css';
import './styles/bootstrap.min.css';
import './styles/icon.css';

class Assistant extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: "#EEEEEE", paddingBottom: "15px" }}>
        <table>
          <tr>
            <td>
              <InputSpinner name="D20" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
          <tr>
            <td>
              <InputSpinner name="D12" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
          <tr>
            <td>
              <InputSpinner name="D10" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
          <tr>
            <td>
              <InputSpinner name="D8" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
          <tr>
            <td>
              <InputSpinner name="D6" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
          <tr>
            <td>
              <InputSpinner name="D4" />
            </td>
            <td>
              <InputSpinner name="+/-" />
            </td>
            <td>
              <button className="roll-button">ROLL</button>
            </td>
          </tr>
        </table>
        <div className="output">
        </div>
      </div>
    );
  }
}

export default Assistant;
