import './App.css';
import { weatherArr } from './weather';
import { store } from "./store/store.js";
import { getWeather } from './weather';
import { useEffect } from 'react';
import { Card } from './card';
function App() {
  return (
    
    <div className="app">
      <div className='mainWin'>
        <div className="text">
    <p>{JSON.parse(sessionStorage.getItem('weather'))[0].date}</p>
    <p>{Math.round(JSON.parse(sessionStorage.getItem('weather'))[0].temp)}&deg;C</p>
    <p>Real feel {Math.round(JSON.parse(sessionStorage.getItem('weather'))[0].feels)}&deg;C</p>
    <p>Humidity {JSON.parse(sessionStorage.getItem('weather'))[0].humid}%</p>
    </div>
    <div className='weatherIcon'>
      <img src={require(`./assets/weather/${JSON.parse(sessionStorage.getItem('weather'))[0].weather}.png`)}></img>
      <p>{JSON.parse(sessionStorage.getItem('weather'))[0].weather}</p>
    </div>
      </div>
      <div className='weekdays'>  
      <Card num='1' />
        <Card num='2' />
        <Card num='3' />
        <Card num='4' />
      </div>
    </div>
  );
}


export default App;
