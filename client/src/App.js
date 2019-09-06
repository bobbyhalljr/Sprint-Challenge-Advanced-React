import React from 'react';
import axios from 'axios';

import PlayerCard from './components/PlayerCard';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({playerData: res.data})
      console.log(res)
    })
    .catch(error => console.log(error.response))
  }
  
  render(){
    return (
      <div className="App">
        <h1>Woman Soccer Player Data</h1>
        <PlayerCard id={this.state.playerData.id} playerData={this.state.playerData} />
      </div>
    );
  }
}

export default App;
