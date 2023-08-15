'use client'

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation'
const Themebutton = dynamic(() => import("./Themebutton"), { ssr: false });


export default function Header() {

    let pathname = usePathname() || '/'

    return (
        <header className="flex items-center w-full sticky top-0 h-16 justify-between  dark:text-white dark:bg-slate-800">
            <div className="flex items-center ml-4 p-4">
                <p>Dustin&apos;s Portfolio</p>
            </div>
            <div className="flex items-center justify-evenly p-4">
                <div className={`${pathname === '/' ? 'p-4 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'p-4 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/" prefetch>Home</Link>
                </div>
                <div className={`${pathname === '/projects' ? 'p-4 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'p-4 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/projects" prefetch>Projects</Link>
                </div>
                <div className={`${pathname === '/contact' ? 'p-4 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'p-4 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/contact" prefetch>Contact</Link>
                </div>
                
                <div className="p-4">

                        <Themebutton/>

                </div>
            </div>
              

        </header>
    )
}