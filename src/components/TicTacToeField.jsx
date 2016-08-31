import React, {Component} from 'react';

import FlatButton from 'material-ui/FlatButton';

export default class TicTacToeField extends Component {

  
  
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
        className={`field field-${this.props.index}`} />
    );
  }
}