import React from "react";

export default function WeatherCard({ card }) {

    return (
        <button onClick={event => console.log("clicked")}>
            <div className="text-center px-5 py-2 hover:rounded-xl hover:bg-gray-200">
                <p>Sat</p>
                <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                    alt=""
                />
                <div className="flex justify-around p-2">
                    <p>21'</p>
                    <p>9'</p>
                </div>
            </div>
        </button>
    )
}