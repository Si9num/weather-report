import list from './assets/city.list.json'
import { getWeather } from './weather';
import { useState,useEffect } from 'react';

export  function Search(){

 
    let arr = [];
    for(let i = 0; i < list.length; i++){
        if(list[i].country==="BY"){
    arr.push(<option value={list[i].name} key={i} ></option>)
        }
    }
   
    return(
        <div>
    <input className='search' list='cities' placeholder='search'  ></input>
    <datalist id='cities' >
      {arr}
    </datalist>
    <button className='searchBtn' 
       >Search</button>
    </div>
    )
    
}