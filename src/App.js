import img from './assets/weather/cloud.png'
import './App.css';
import { weatherArr } from './weather';
import { store } from "./store/store.js";
import { getWeather } from './weather';
import { useEffect } from 'react';
function App() {
  return (
    
    <div className="app">
      <div className='mainWin'>
        <div className="text">
    <p>{JSON.parse(sessionStorage.getItem('weather'))[0].date}</p>
    <p>{Math.round(JSON.parse(sessionStorage.getItem('weather'))[0].temp)}</p>
    <p>REAL FEEL {Math.round(JSON.parse(sessionStorage.getItem('weather'))[0].feels)}</p>
    <p>HUMIDITY {JSON.parse(sessionStorage.getItem('weather'))[0].humid}</p>
    </div>
    <div className='weatherIcon'>
      <img src={require(`./assets/weather/${JSON.parse(sessionStorage.getItem('weather'))[0].weather}.png`)}></img>
    </div>
      </div>
      <div className='weekdays'>  

      </div>
    </div>
  );
}


export default App;
