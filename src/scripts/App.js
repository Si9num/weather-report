import '../styles/App.css';
import { getWeather } from './weather';
import { useState,useEffect } from 'react';
import { Card } from './card';
import { Search } from './search';


function App() {
  const [items, setItems] = useState(JSON.parse(sessionStorage.getItem('weather')))
  
  useEffect(()=>{
    
    document.querySelector('.searchBtn').onclick = async ()=>{
    await getWeather(document.querySelector('.search').value);
      setItems(JSON.parse(sessionStorage.getItem('weather')))
    }
  }) 
  return (
    
    <div>
      
    <div className="app">

      
      <Search />
          
      <div className='mainWin'>
        <div className="text">
    <p>{JSON.parse(sessionStorage.getItem('weather'))[0].date}</p>
    <p>{Math.round(items[0].temp)}&deg;C</p>
    <p>Real feel {Math.round(JSON.parse(sessionStorage.getItem('weather'))[0].feels)}&deg;C</p>
    <p>Humidity {JSON.parse(sessionStorage.getItem('weather'))[0].humid}%</p>
    </div>
    <div className='weatherIcon'>
      <img src={require(`../assets/weather/${JSON.parse(sessionStorage.getItem('weather'))[0].weather}.png`)} alt='img'></img>
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
    </div>
  );
    
}


export default App;
