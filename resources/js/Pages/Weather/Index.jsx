import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WeatherForecast from '@/Components/WeatherForecast';
import Dropdown from '@/Components/Dropdown';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';


export default function Index({ auth, data }) {
    
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title='Weather'/>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className='flex justify-between items-center'>
                    <h1>Weather Controller</h1>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <PrimaryButton>
                                Location
                            </PrimaryButton>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link as="button" href="#">
                                Brisbane
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                <WeatherForecast data={data} />
            </div>
        </AuthenticatedLayout>
    )
}