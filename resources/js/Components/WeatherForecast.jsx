import React from "react";
import WeatherCard from '@/Components/WeatherCard';

export default function WeatherForecast({ weather }){

    console.log(weather.forecast.forecastday);

    return (
        <div className="rounded-xl bg-white border-gray-200 my-5 py-5">
            <div className="flex justify-between items-center">
            {/* left */}
                <div className="flex w-1/2 items-center">
                    {/* inner left */}
                    <div className="flex items-center">
                        <img 
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            className="px-2" />
                        <span className="px-3 text-4xl">{weather.current.temp_c}°</span>
                    </div>
                    {/* inner right */}
                    <div className="pl-3 text-sm">
                        <p>Precipitation: {weather.current.precip_mm}mm</p>
                        <p>humidity: {weather.current.humidity}%</p>
                        <p>wind: {weather.current.wind_kph}km/h</p>
                    </div>
                </div>
                {/* right */}
                <div className="text-right pr-5">
                    <p className="text-lg">{weather.location.name}</p>
                    <p className="text-sm">Saturday</p>
                    <p className="text-sm">partly cloudy</p>  
                </div>
            </div> 
            <div className="flex justify-around mt-5 px-2">
                {
                    weather.forecast.forecastday.map((day, idx) => {
                        return (
                            <WeatherCard key={idx} dayWeather={day}/>
                        )
                    })
                }
            </div>
        </div>
    )
}