<?php

namespace App\Http\Controllers;

use App\Models\Weather;
use App\Services\WeatherService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WeatherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // Hit weather service pass return as props
        return Inertia::render('Weather/Index', [
            'data' => WeatherService::getForecast("Brisbane"),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Weather $weather)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Weather $weather)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Weather $weather)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Weather $weather)
    {
        //
    }
}
