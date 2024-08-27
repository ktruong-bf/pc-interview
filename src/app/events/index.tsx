'use client';

import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

type Event = {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    createdAt: Date;
}

const Page = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const getEvents = () => {
        return new Promise(async (resolve, reject) => {
            const response = await axios.get('/api/events');
            resolve(response.data.events);
        });
    }
    useEffect(() => {
        getEvents()
            .then((response: any) => {
                setEvents(response);
            })
    }, []);
    
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex-auto">Events</h1>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <PlusIcon aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <ul role="list" className="divide-y divide-gray-100">
                        {events.map(event => {
                            return (
                                <li key={event.id} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">

                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{event.name}</p>
                                            <p className="text-xs leading-5 text-gray-700">{new Date(event.startDate).toDateString()} - {new Date(event.endDate).toDateString()}</p>
                                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                                {event.description}
                                            </p>

                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <PencilSquareIcon aria-hidden="true" className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Page;