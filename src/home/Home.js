import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './home.css';
import Avatar from './avatar.png';

//TODO Fetch version from github
let botVersion = '2.0';

class Home extends React.Component {
  render(){
    return(
      <div className="home">
        <img src={Avatar}
          alt={"logo"}
          width="250" />
        <h2>Welcome To Kicky{' ' + botVersion}</h2>
        <h3>A bot for your Discord Server</h3>
        <FlatButton label="Invite" target="_blank" href="https://discordapp.com/api/oauth2/authorize?client_id=384572972851265538&permissions=8&scope=bot" />
        <FlatButton label="Discord" target="_blank" href="https://discord.gg/6VpxTbY" />
      </div>
    );
  }
}

export default Home;
