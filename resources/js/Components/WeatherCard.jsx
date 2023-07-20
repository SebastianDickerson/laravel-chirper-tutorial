import React, { useCallback } from "react"; 
import { parseDate, parseTemp } from "@/utils/utils";

export default function WeatherCard({ dayWeather, onChange }) {


    const handleClick = useCallback(event => {
        onChange({
            maxTemp: parseTemp(dayWeather.day.maxtemp_c),
            totalPrecip: dayWeather.day.totalprecip_mm,
            maxWind: dayWeather.day.maxwind_kph,
            description: dayWeather.day.condition.text,
            avgHumidity: dayWeather.day.avghumidity,
            date: parseDate(dayWeather.date),        })
    }, [onChange]);

    return (
        <button onClick={handleClick}>
            <div className="text-center px-5 py-2 hover:rounded-xl hover:bg-gray-200">
                <p>{parseDate(dayWeather.date)}</p>
                <img 
                    className="h-12 m-auto"
                    src={dayWeather.day.condition.icon}
                    alt={dayWeather.day.condition.text}
                />
                <div className="flex justify-around p-2">
                    <p>{Math.round(dayWeather.day.maxtemp_c)}°</p>
                    <p>{Math.round(dayWeather.day.mintemp_c)}°</p>
                </div>
            </div>
        </button>
    )
}