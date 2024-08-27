'use client';

import TestCases from "@/components/paths/test-cases";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

export type Path = {
    path: string;
    children: Path[]
}

const Page = () => {

    /**
     * Implement getPaths that would take Path array and return a list of all possible paths
     * @param paths 
     * @returns 
     */
    const getPaths = (paths: Path[]): string[] => {         
        // Your code goes here
        return [];
    }

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex-auto">Paths</h1>                    
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <TestCases func={getPaths} />
                </div>
            </main>
        </>
    );
}

export default Page;