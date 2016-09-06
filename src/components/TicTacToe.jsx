import React, {Component} from 'react';
import TicTacToeField from './TicTacToeField.jsx'
import TicTacToeModes from './TicTacToeModes.jsx'


class TicTacToe extends Component {

  constructor() {
    super();

    this.state = {
      gameMode: null
    };

    this.state = {
      fields: (new Array(9)).fill(null),
      player: 1
    };
  }


  setGameMode(value) {
    this.setState({
      gameMode: value
    });
  }



  togglePlayer() {
    var player;
    if(this.state.player == 1)
      player = 2;
     else
      player = 1;

    this.setState({
      player: player
    });
  }


  /**
   * Field click handler
   *
   * @param {int} index
   * @param {proxy} e
   *
   * @returns {number}
   */
  fieldClickHandle(index, e) {

    var fields = this.state.fields;
        fields[index] = this.state.player;

    this.setState({
      fields: fields
    });


    this.togglePlayer();

    this.checkWinner();
    
    return this.state.player;
  }



  /**
   * Check who's the winner
   *
   * @returns {int}
   */
  checkWinner() {
    const victoriesCombos = [
      {
        player1: 0,
        player2:0,
        fields: [0,1,2]
      },
      {
        player1: 0,
        player2:0,
        fields: [3,4,5]
      },
      {
        player1: 0,
        player2:0,
        fields: [6,7,8]
      },

      {
        player1: 0,
        player2:0,
        fields: [0,3,6]
      },
      {
        player1: 0,
        player2:0,
        fields: [1,4,5]
      },
      {
        player1: 0,
        player2:0,
        fields: [2,5,8]
      },

      {
        player1: 0,
        player2:0,
        fields: [0,4,8]
      },
      {
        player1: 0,
        player2:0,
        fields: [2,4,6]
      },
    ];

    var combos;

    for (let i = 0; i < this.state.fields.length; i++) {
      var field = this.state.fields[i];
      combos = victoriesCombos.map(combo => {
        if(combo.fields.indexOf(field) > -1)
          combo[`player${field}`]++;

        return combo;
      });
    }
    
    combos.every((combo, a) => {
      console.log(combo);
      console.log(a);
      return true;
    });


    this.combos = combos;


    this.showWinner();
  }


  showWinner() {
    
  }



  /**
   * Render each field
   *
   * @returns {*}
   */
  renderFields() {
    if(this.state.gameMode){
      this.fieldsArr = (new Array(9).fill(null));

      this.fields = this.fieldsArr.map((field, i) => {
        return (<TicTacToeField key={i} index={i} fieldClick={this.fieldClickHandle.bind(this, i)} />);
      });

      return this.fields;
    }

    return false;
  }


  /**
   * Render Component
   * @returns {DOM}
   */
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