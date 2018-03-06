import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './home.css';
import './home.scss';
import Avatar from './avatar.png';

//TODO Fetch version from github
let botVersion = '3.0';

let features = [
  {
    "name": "Basic-Commands",
    "description": "This is a list of basic commands Kicky already knows. The default prefix is k!",
    "commands": [
      {
        "command": "hello",
        "description": "greets you with your name"
      },
      {
        "command": "ping",
        "description": "try it ;-)"
      },
      {
        "command": "8ball",
        "description": "ask a question that can be answered with yes or no"
      },
      {
        "command": "help",
        "description": "shows this list of commands"
      },
      {
        "command": "info",
        "description": "shows general infos about Kicky"
      }
    ]
  },
  {
    "name": "Music",
    "description": "It is possible to let Kicky play music. For that you have to be in a voice channel.",
    "commands": [
      {"command":"play <youtube-link>", "description":"Play this song or add it to the queue"},
      {"command":"skip", "description":"skip the next song"},
      {"command":"stop", "description":"stop playig music"}
    ]
  }
];

class Home extends React.Component {
  render(){
    return(
      <div className="home">
        <div className="landing">
          <img src={Avatar}
            alt={"logo"}
            width="250" />
          <h2>Welcome To Kicky{' ' + botVersion}</h2>
          <h3>A bot for your Discord Server</h3>
          <FlatButton label="Invite" target="_blank" href="https://discordapp.com/api/oauth2/authorize?client_id=384572972851265538&permissions=8&scope=bot" />
          <FlatButton label="Discord" target="_blank" href="https://discord.gg/6VpxTbY" />
        </div>
        <div className="features">
          <h2>Features</h2>
          <p>Kicky knows a set of commands. To execute this commands you have to write the prefix and with no space the command.</p>
          {features.map((feature) => this.renderFeature(feature))}
          <h2>Planned Features</h2>
          <h3>configuration via dashboard</h3>
          <p>There will be the possibility to configure things like the prefix via a dashboard.</p>
          <h3>sales-system</h3>
          you will be able to add sales to a list of sales.<br />
          These include a link to the offer and an start and end date.<br />
          With another command you will be able to retrieve this list.
          <h3>level-system</h3>
          If you write something you will gain xp.<br />
          If you have enough xp you will reach the next level.
        </div>
      </div>
    );
  }

  renderFeature(feature){
    return(
      <div>
        <h3>{feature.name}</h3>
        <p>{feature.description}</p>
        <table>
          <thead>
            <tr>
              <th>command</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {feature.commands.map((command) => this.renderCommand(command))}
          </tbody>
        </table>
      </div>
    );
  }

  renderCommand(command){
    return(
      <tr>
      <td>{command.command}</td>
      <td>{command.description}</td>
      </tr>
    );
  }

}

export default Home;
