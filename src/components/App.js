import React, { Component } from 'react';
import './App.css';

const API = 'https://api.openweathermap.org/data/2.5/weather?q=Turek&appid=e53dc0a789987740a8850b0150589346&units=metric'

class App extends Component {
  state={
    cityName: 'Turek',
    cityWeather: []
  }

  handleGetWeather = ()=>{
    fetch(API)
    .then(resp => (resp.json()))
    .then(resp => (
      this.setState({
        cityWeather: resp.main
      })
    ))
    .then(console.log(this.state.cityWeather))
  }

  
  componentDidMount() {
    this.handleGetWeather()
  }
  

  render() {
    return (
      <div>
        <h1>Pogoda</h1>
        <button onClick={this.handleGetWeather}>Poka pogode dla Turku</button>
      </div>
    );
  }
}

export default App;