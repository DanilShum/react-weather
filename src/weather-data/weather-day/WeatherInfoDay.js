import React,{useContext} from 'react'
import WeatherInfoTeperature from './weather-info-temerature/WeatherInfoTeperature'
import WeatherInfoFull from './weather__info-full/WeatherInfoFull'

export default function WeatherInfoDay(){
   
    const date = new Date();
    const day = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    const month = ['Января' , 'Февраля' , 'Марта' , 'Апрелья' , 'Майя' , 'Июнья' , 'Июлья' , 'Августа' , 'Сентябрья' , 'Октябрья' , 'Ноябрья' , 'Декабрья' ]
    let today = day[date.getDay()]
    let currentMonth = month[date.getMonth()]    
    
    let currentDay = [today,' ',date.getDate(),' ',currentMonth]

    return (
        <div className="weather__info">
            <h3 className="weather__info-title"> {currentDay}</h3>
            <div className="weather__info-content">
                <WeatherInfoTeperature/>
                <WeatherInfoFull/>
            </div>
           
        </div>
    )
}
