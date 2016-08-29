import React, {Component} from 'react';
import TicTacToeField from './TicTacToeField.jsx'


class TicTacToe extends Component {



  renderFields() {
    this.fieldsArr = (new Array(9).fill(null));

    this.fields = this.fieldsArr.map((field, i) => {
      return (<TicTacToeField key={i} index={i} />);
    })

    return this.fields;
  }


  render() {
    return (
      <div className="tictactoe">
        {this.renderFields() }
      </div>
    )
  }

}

export default TicTacToe;