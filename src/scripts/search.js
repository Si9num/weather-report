import list from '../assets/city.list.json'

import '../styles/search.css'

export  function Search(){
   
 
    let arr = [];
    for(let i = 0; i < list.length; i++){
      
    arr.push(<option value={list[i].name} key={i} ></option>)
      
    }
   
    return(
        <div className='searchForm'>
    <input className='search' list='cities'  ></input>
    <datalist id='cities' >
      {arr}
    </datalist>
    <button className='searchBtn' 
       >Search</button>
    </div>
    )
    
}