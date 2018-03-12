import React from 'react';
import './Footer.scss';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span>
          <span>powered by </span>
          <a href="https://github.com/better-live-movement" target="_blank">Better Live Movement</a>
        </span>
      </div>
    );
  }
}

export default Footer;
