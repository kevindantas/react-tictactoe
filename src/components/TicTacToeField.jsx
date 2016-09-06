import React, {PropTypes, Component} from 'react';

import FlatButton from 'material-ui/FlatButton';

import PlayerCircle from './PlayerCircle.jsx';
import PlayerCross from './PlayerCross.jsx';

export default class TicTacToeField extends Component {

  constructor() {
    super();

    this.state = {
      icon: null
    };
  }


  onClickHandle() {
    
    const player = this.props.fieldClick();

    if(player == 1) {
      this.setState({
        icon: <PlayerCircle />
      })
    } else {
      this.setState({
        icon: <PlayerCross />
      })
    }

  }

  
  render() {
    const buttonStyle =  {
      height: 200,
      width: 200,
      lineHeight: 200,
      overflow: 'visible'
    };

    return (
      <FlatButton
        label="&nbsp;"
        style={buttonStyle}
        rippleColor="#CDDC39"
        icon={this.state.icon}
        disabled={!!this.state.icon}
        onClick={this.onClickHandle.bind(this)}
        className={`field field-${this.props.index}`} />
    );
  }
}


TicTacToeField.props = {
  fieldClick: PropTypes.func
};