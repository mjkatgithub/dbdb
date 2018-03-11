import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import './home.css';
import './home.scss';
import Avatar from './avatar.png';

class Home extends React.Component {
  render(){
    return(
      <div className="home">
        <div className="landing">
          <img src={Avatar}
            alt={"logo"}
            width="250" />
          <h2>Welcome To Kicky{' ' + this.props.botVersion}</h2>
          <h3>A bot for your Discord Server</h3>
          <FlatButton label="Invite" target="_blank" href="https://discordapp.com/api/oauth2/authorize?client_id=384572972851265538&permissions=8&scope=bot" />
          <FlatButton label="Discord" target="_blank" href="https://discord.gg/6VpxTbY" />
        </div>
        <div className="features">
          <h2>Features</h2>
          <p>Kicky knows a set of commands. To execute this commands you have to write the prefix and with no space the command.</p>
          {this.props.features.map((feature, key) => this.renderFeature(feature, key))}
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

  renderFeature(feature, key){
    return(
      <div key={key}>
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
            {feature.commands.map((command, key) => this.renderCommand(command, key))}
          </tbody>
        </table>
      </div>
    );
  }

  renderCommand(command, key){
    return(
      <tr key={key}>
      <td>{command.command}</td>
      <td>{command.description}</td>
      </tr>
    );
  }

}

Home.propTypes = {
  botVersion: PropTypes.string,
  features: PropTypes.array
};

export default Home;
