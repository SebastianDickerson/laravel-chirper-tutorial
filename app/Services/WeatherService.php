<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherService 
{

    const BASE_URL = "api.weatherapi.com/v1/";

    static function getForecast ( string $location )
    {

        $apiKey = config('app.openweather_api'); 
        $response = Http::get(self::BASE_URL."forecast.json?key={$apiKey}&q={$location}&days=5&aqi=no&alerts=no");

        return self::parseResponse($response->json());

    }

    static function parseResponse ( mixed $data ) 
    {
        ['location' => $location, 'forecast' => $forecast] = $data;
        $parsedData['location'] = $location;
        $parsedData['forecast'] = $forecast['forecastday'];

        return $parsedData;
    }

}
