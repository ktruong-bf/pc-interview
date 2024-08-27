'use client';

import Layout from "@/components/layouts/default";

const Page = () => {
    return (
        <Layout>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tasks</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <ul role="list" className="divide-y divide-gray-100">
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Task #1</p>
                                    <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        <p>Given an array of paths with prefix and its children.</p>
                                        <pre>
                                            {`
[
    {
        path: '/a',
        children: [
            {
                path: '/b',
                children: [
                    {
                        path: '/c',
                        children: []
                    },
                    {
                        path: '/d',
                        children: []
                    }
                ]
            },
            {
                path: '/e',
                children: []
            }
        ]
    },
    {
        path: '/f',
        children: []
    },
    {
        path: '/d',
        children: [
            {
                path: '/e',
                children: []
            }
        ]
    },
]

Write a function that takes the array above and return a flatten array of all the possible paths 

[
    '/a',
    '/a/b',
    '/a/b/c',
    '/a/b/d',
    '/a/e',
    '/f',
    '/d',
    '/d/e',
]
                                            `}
                                        </pre>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900 mb-2">Task #2</p>
                                    <ul className="max-w-md space-y-1 text-xs text-gray-500 list-disc list-inside">
                                        <li>Add "Create Event" functionality for Events page</li>
                                        <li>Implement the API endpoint to save event</li>
                                    </ul>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Hint: create a modal https://tailwindui.com/components/application-ui/overlays/modal-dialogs and display a form</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900 mb-2">Task #3</p>
                                    <ul className="max-w-md space-y-1 text-xs text-gray-500 list-disc list-inside">
                                        <li>Add "Edit Event" functionality for Events page</li>
                                        <li>Implement the API endpoint to save event</li>
                                    </ul>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Hint: reuse the create modal</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}

export default Page;