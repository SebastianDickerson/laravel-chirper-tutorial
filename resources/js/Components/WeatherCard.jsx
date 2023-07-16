import React from "react"; 
import { Info } from "luxon";

export default function WeatherCard({ dayWeather }) {

    let date = new Date(dayWeather.date)

    const getIcon = (path) => {
        return `/storage/icons/${path}`;
    }

    return (
        <button onClick={event => console.log("clicked")}>
            <div className="text-center px-5 py-2 hover:rounded-xl hover:bg-gray-200">
                <p>{Info.weekdays()[date.getDay()]}</p>
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