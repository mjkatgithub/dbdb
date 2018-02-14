import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Index extends React.Component {
  render(){
    return(
      <div className="Indexx">
        <img src="https://raw.githubusercontent.com/mjkatgithub/d-bot/master/img/avatar.png"
          alt={"logo"}
          width="200" />
        <h2>Welcome To D-Bot 2.0</h2>
        <h3>A bot for your Discord Server</h3>
        <FlatButton label="Invite" href="https://discordapp.com/api/oauth2/authorize?client_id=384572972851265538&scope=bot&permissions=1" />
        <FlatButton label="Discord" href="https://cnhv.co/1gdf0" />
      </div>
    );
  }
}

export default Index;
