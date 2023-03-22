import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Preloader } from './preloader';
import {getWeather} from './weather'
import { Provider } from "react-redux";
import { store } from './store/store';
import { Search } from './search';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
       <Preloader />
    </React.StrictMode>
  );

setTimeout(()=>{
  root.render(
    <React.StrictMode>
       <Provider store={store}>
       
      <App />
      </Provider>
    </React.StrictMode>
  );
},3000)

getWeather()




