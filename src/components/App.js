import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    cityName: 'Turek',
    cityTemp: [],
    cityClouds: [],
    cityWind: [],
    citySun: [],
    cityInput: "Turek"
  }

  handleGetWeather = ()=>{
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=e53dc0a789987740a8850b0150589346&units=metric`
    fetch(API)
    .then(resp => (resp.json()))
    .then(resp => (
      this.setState({
        cityTemp: resp.main,
        cityClouds: [resp.weather[0].main, resp.weather[0].description],
        cityWind: resp.wind,
        citySun: [resp.sys.sunrise, resp.sys.sunrise],
      })
    ))
    .then(console.log(this.state))
  }

  handlerInputCity= (e)=>{
    this.setState({
      cityInput: e.target.value
    })
  }

  
  componentDidMount() {
    this.handleGetWeather()
  }
  

  render() {
    return (
      <div>
        <h1>Pogoda</h1>
        <input value={this.state.cityInput} onChange={this.handlerInputCity} placeholder='Podaje nazwę miasta' name='city'></input>
        <button onClick={this.handleGetWeather}>Poka pogode dla Turku</button>
      </div>
    );
  }
}

export default App;