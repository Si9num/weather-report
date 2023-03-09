import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {getWeather} from './weather'
import { Provider } from "react-redux";
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
setTimeout(()=>{
  root.render(
    <React.StrictMode>
       <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  );
},300)

getWeather()



