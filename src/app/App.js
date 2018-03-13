import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './app.css';

import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Layout from './Layout.js'

import Header from '../Header/Header.js'
import HomeContainer from '../Home/HomeContainer.js'
import Server from '../Server/Server.js'
import Footer from '../Footer/Footer'

class App extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path={"/"} component={Layout}>
            <IndexRoute component={HomeContainer} />
            <Route path={"home"} component={HomeContainer} />
            <Route path={"server"} component={Server} />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

//<HomeContainer />

const app = document.getElementById('app');

ReactDom.render(<App/>, app);
