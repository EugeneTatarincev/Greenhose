import React from 'react'
import WeatherComp from '../weather-comp/WeatherComp'

import './WeatherIn.css'

export default function WeatherIn({temp, dates}) {
    return (
        <div className="weather">
            {temp.map((item, i) => <WeatherComp key={i} temp={item} data={dates[i]}/>)}
        </div>
    )
}