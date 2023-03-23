
export async function getWeather(city="Minsk"){
    let weatherArr = [];
    let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_KEY}&units=metric`);
    let weather = await res.json()
    weatherArr.splice(0,weatherArr.length)
    for(let i = 0; i < weather.list.length; i++){
        weatherArr.push({
            date: weather.list[i].dt_txt.slice(0,10).split('-').reverse().join('.'),
            temp: weather.list[i].main.temp,
            feels: weather.list[i].main.feels_like,
            humid: weather.list[i].main.humidity,
            weather:weather.list[i].weather[0].description
        })
    }
    
    let tmpArray = [];

function itemCheck(item) {
    if (tmpArray.indexOf(item.date) === -1) {
        tmpArray.push(item.date);
        return true
    }
    return false;
    
}

weatherArr= weatherArr.filter((item) => itemCheck(item))

    sessionStorage.setItem('weather',JSON.stringify(weatherArr))
    
}
