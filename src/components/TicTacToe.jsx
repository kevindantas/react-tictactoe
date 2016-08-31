import React, {Component} from 'react';
import TicTacToeField from './TicTacToeField.jsx'
import TicTacToeModes from './TicTacToeModes.jsx'


class TicTacToe extends Component {

  constructor() {
    super();

    this.state = {
      gameMode: null
    }
  }


  setGameMode(value) {
    this.setState({
      gameMode: value
    });
  }


  renderFields() {
    if(this.state.gameMode){
      this.fieldsArr = (new Array(9).fill(null));

      this.fields = this.fieldsArr.map((field, i) => {
        return (<TicTacToeField key={i} index={i} />);
      });

      return this.fields;
    }

    return false;
  }


  render() {
    return (
      <div className="tictactoe">
        <TicTacToeModes setMode={this.setGameMode.bind(this)} />
        <div className="fields-wrapper">
          {this.renderFields() }
        </div>
      </div>
    )
  }

}

export default TicTacToe;