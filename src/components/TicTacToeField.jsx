import React, {Component} from 'react';

export default class TicTacToeField extends Component {
  render() {
    return (
      <div className={`field field-${this.props.index}`}>

      </div>
    );
  }
}