import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import './app.css';
import './Layout.scss';

class Layout extends React.Component {
  render(){
    return(
      <div id="AppContainer">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
