import React from 'react';
import Home from './Home'

class HomeContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      "botVersion": '',
      "features": []
    }
  }

  componentDidMount() {
    this.fetchBotVersion();
    this.fetchFeatures();
  }

  render() {
    return (
      <Home botVersion={this.state.botVersion} features={this.state.features} />
    );
  }

  fetchBotVersion(){
    let fetchedVersion = '';
    let adjustedVersion = '';
    fetch('https://api.github.com/repos/better-live-movement/kicky/tags')
      .then((res) => res.json() )
      .then((data) => {
        fetchedVersion = data[0].name;
        let patchLevelStart = fetchedVersion.lastIndexOf(".")
        adjustedVersion = fetchedVersion.substring(0, patchLevelStart);
        this.setState({"botVersion": adjustedVersion});
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

//TODO fetch features from api
  fetchFeatures(){
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
    this.setState({"features": features});
  }
}

export default HomeContainer;
