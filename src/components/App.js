import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Form from './Form';

const APIkey = 'e53dc0a789987740a8850b0150589346'

class App extends Component {
  state={
    error: true,
    errMsg: '',
    name: '',
    country: '',
    temp: '',
    feelsLike: '',
    tempMax: '',
    tempMin: '',
    humidity: '',
    pressure: '',
    speed: '',
    sunrise: '',
    sunset: '',
    date: '',
    value: ''
  }

  handleGetWeather = ()=>{
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`
    fetch(API)
    .then(resp =>{
      if(resp.ok){
        return resp.json()
      }
      this.setState({
      error: true
      })
      throw Error(resp.json().message)
    })
    .then(resp => 
      { 
        const date = new Date().toLocaleString()
        const sunrise = new Date(resp.sys.sunrise*1000).toLocaleTimeString()
        const sunset = new Date(resp.sys.sunset*1000).toLocaleTimeString()
        this.setState({
          error: false,
          name: this.state.value,
          country: resp.sys.country,
          temp: resp.main.temp,
          feelsLike: resp.main.feels_like,
          tempMax: resp.main.temp_max,
          tempMin: resp.main.temp_min,
          humidity: resp.main.humidity,
          pressure: resp.main.pressure,
          speed: resp.wind.speed,
          sunrise,
          sunset,
          date,
        })
      })
    .catch((error)=>{
      this.setState({
        errMsg: `Nie mogę znaleźć miasta ${this.state.value}`
      })
    })
  }

  handleInputCity= (e)=>{
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value){
     this.handleGetWeather()
    }
  
  }
  

  render() {
    return (
      <div>
        <h1>Pogoda</h1>
        <Form input={this.state.value} change={this.handleInputCity} click={this.handleGetWeather}/>
        <br/>
        {this.state.error ? <div>Nie mogę znaleźć miasta: <strong>{this.state.value}</strong></div> : <Weather 
          name={this.state.name}
          country={this.state.country}
          date={this.state.date}
          temp={this.state.temp}
          feelsLike={this.state.feelsLike}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          speed={this.state.speed}
          gust={this.state.gust}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
        />}
      </div>
    );
  }
}

export default App;