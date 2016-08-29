import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TicTacToe from './components/TicTacToe.jsx';
import { Card, CardTitle } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



injectTapEventPlugin();


const titleStyle = {
  fontSize: 42
};


const App = () =>  (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="container">
          <Card>
            <CardTitle title="Tic Tac Toe" titleStyle={titleStyle} />
            <TicTacToe />
          </Card>
        </div>
      </MuiThemeProvider>
);


var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);


render(<App />, document.getElementById('app'));