import React, {PropTypes, Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default class TicTacToeMode extends Component {

  constructor() {
    super();

    this.state = {
      modeChoose: null
    };
  }

  onClickHandle(mode) {
    this.props.setMode(mode);
    this.setState({
      modeChoose: mode
    });
  }


  render() {
    return (
      <div className={`tictactoe-modes ${this.state.modeChoose ? 'is-active' : ''}`}>
        <h3>Escolha um modo de jogo</h3>
        <RaisedButton onClick={this.onClickHandle.bind(this, 1)} label="Contra o PC" />
        <RaisedButton onClick={this.onClickHandle.bind(this, 2)} label="2 Jogadores" />
        <RaisedButton onClick={this.onClickHandle.bind(this, 3)} label="Online" />
      </div>
    );
  }
}


TicTacToeMode.propTypes = {
  setMode: PropTypes.func
};