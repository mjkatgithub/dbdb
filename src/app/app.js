import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../header/Header.js'
import Indexx from './Index.js'

class App extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Header />
          <Indexx />
        </div>
      </MuiThemeProvider>
    );
  }
}

const app = document.getElementById('app');

ReactDom.render(<App/>, app);
