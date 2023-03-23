export function Card(props){
    let num = props.num
    return(
        <div className='dayWin'>
           
        <div className="text_card">
    <p>{JSON.parse(sessionStorage.getItem('weather'))[num].date}</p>
    <p>{Math.round(JSON.parse(sessionStorage.getItem('weather'))[num].temp)}&deg;C</p>
    <p>Real feel {Math.round(JSON.parse(sessionStorage.getItem('weather'))[num].feels)}&deg;C</p>
    <p>Humidity {JSON.parse(sessionStorage.getItem('weather'))[num].humid}%</p>
    </div>
    <div className='weatherIcon_card'>
      <img src={require(`../assets/weather/${JSON.parse(sessionStorage.getItem('weather'))[num].weather}.png`)} alt='img'></img>
      <p>{JSON.parse(sessionStorage.getItem('weather'))[num].weather}</p>
    </div>
    </div>
      
    )
}