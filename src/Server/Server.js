import React from 'react';
import './Server.scss';
import ReactGA from 'react-ga';

class Server extends React.Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };
    ReactGA.initialize('UA-59768657-2');
    ReactGA.pageview(window.location.pathname);
  }


  render() {
    return (
      <div className="Server">
        <span>{'soon (tm)'}</span>
      </div>
    );
  }
}

export default Server;
