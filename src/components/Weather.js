import React from 'react';

function Weather(props) {
    return (
        <div>
            <span>Pogoda dla miasta <strong>{props.name}, {props.country}</strong> z dnia <strong>{props.date}</strong></span>
            <span>Temperatura: <strong>{props.temp}{'\xB0C'}</strong></span>
            <span>Temperatura odczuwalna: <strong>{props.feelsLike}{'\xB0C'}</strong></span>
            <span>Temperatura MAX: <strong>{props.tempMax}{'\xB0C'}</strong></span>
            <span>Temperatura MIN: <strong>{props.tempMin}{'\xB0C'}</strong></span>
            <span>Wilgotność powietrza: <strong>{props.humidity}%</strong></span>
            <span>Ciśnienie: <strong>{props.pressure}hPa</strong></span>
            <span>Prędkość wiatru: <strong>{props.speed}m/s</strong></span>
            <span>Wschód słońca: <strong>{props.sunrise}</strong></span>
            <span>Zachód słońca: <strong>{props.sunset}</strong></span>
        </div>
    );
}

export default Weather;