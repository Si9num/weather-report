import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './scripts/App';
import { Preloader } from './scripts/preloader';
import {getWeather} from './scripts/weather'

import './styles/media.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
       <Preloader />
    </React.StrictMode>
  );

setTimeout(()=>{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
},3000)

getWeather()




