import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './home.css';
import Avatar from './avatar.png';

//TODO Fetch version from github
class Home extends React.Component {
  render(){
    return(
      <div className="home">
        <img src={Avatar}
          alt={"logo"}
          width="250" />
        <h2>Welcome To Kicky</h2>
        <h3>A bot for your Discord Server</h3>
        <FlatButton label="Invite" href="https://discordapp.com/api/oauth2/authorize?client_id=384572972851265538&scope=bot&permissions=1" />
        <FlatButton label="Discord" href="https://cnhv.co/1gdf0" />
      </div>
    );
  }
}

export default Home;
