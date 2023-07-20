import React, { useState } from "react";
import WeatherCard from '@/Components/WeatherCard';
import { parseDate, parseTemp } from "@/utils/utils";

export default function WeatherForecast({ data }){
    const { forecast, location } = data;
    const [ weather, setWeather ] = useState({
        maxTemp: parseTemp(forecast[0].day.maxtemp_c),
        totalPrecip: forecast[0].day.totalprecip_mm,
        maxWind: forecast[0].day.maxwind_kph,
        description: forecast[0].day.condition.text,
        avgHumidity: forecast[0].day.avghumidity,
        date: parseDate(forecast[0].date),
    });

    return (
        <div className="rounded-xl bg-white border-gray-200 my-5 py-5">
            <div className="flex justify-between items-center">
                <div className="flex w-1/2 items-center">
                    <div className="flex items-center">
                        <img 
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            className="px-2" />
                        <span className="px-3 text-4xl">{weather.maxTemp}°</span>
                    </div>
                    <div className="pl-3 text-sm">
                        <p>Precipitation: {weather.totalPrecip}mm</p>
                        <p>humidity: {weather.avgHumidity}%</p>
                        <p>wind: {weather.maxWind}km/h</p>
                    </div>
                </div>
                <div className="text-right pr-5">
                    <p className="text-lg">{location.name}</p>
                    <p className="text-sm">{weather.date}</p>
                    <p className="text-sm">{weather.description}</p>  
                </div>
            </div> 
            <div className="flex justify-around mt-5 px-2">
                {
                    forecast.map((day, idx) => {
                        return (
                            <WeatherCard key={idx} onChange={setWeather} dayWeather={day}/>
                        )
                    })
                }
            </div>
        </div>
    )
}