'use client';

import { ReactNode } from "react";
import NavigationBar from "./navigation-bar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}