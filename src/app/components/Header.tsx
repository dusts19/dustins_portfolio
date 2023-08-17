'use client'

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Image from "next/image";
import menu from "public/images/menu.svg"
import close from "public/images/close.svg"
const Themebutton = dynamic(() => import("./Themebutton"), { ssr: false });


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    let pathname = usePathname() || '/'

    return (
        <header className="flex items-center w-full sticky top-0 h-16 justify-between backdrop-blur-md dark:text-white dark:bg-slate-800">
            <div className="flex items-center ml-4 p-4">
                <p>Dustin&apos;s Portfolio</p>
            </div>
            <div className="flex items-center mr-4 pt-4 pr-2 pb-4 pl-4">
            <nav className="hidden md:flex items-center justify-evenly p-4">
                <div className={`${pathname === '/' ? 'lg:p-4 md:p-2 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'lg:p-4 md:p-2 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/" prefetch>Home</Link>
                </div>
                <div className={`${pathname === '/projects' ? 'lg:p-4 md:p-2 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'lg:p-4 md:p-2 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/projects" prefetch>Projects</Link>
                </div>
                <div className={`${pathname === '/contact' ? 'lg:p-4 md:p-2 border-slate-800 border-b-2 dark:text-white dark:border-white dark:border-b-2' : 'lg:p-4 md:p-2 border-transparent border-b-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/contact" prefetch>Contact</Link>
                </div>
                
            </nav>
                <Themebutton/>
                <button
                    className="md:hidden ml-4 border-2 border-black dark:border-white p-1.5 rounded-md dark:bg-teal-500/30 dark:fill-inherit"
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    {isMenuOpen 
                    ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className="w-6 h-6 fill-black dark:fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> 
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-black dark:fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    }
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full text-right bg-white dark:bg-inherit">
                    <ul className="flex flex-col space-y-2">
                        <li className={`${pathname === '/' 
                        ?
                        'border-black border-r-2 p-2 bg-gradient-to-l from-sky-200/30 from-10% via-white dark:text-white dark:border-teal-500 dark:border-r-4 dark:bg-gradient-to-l dark:from-teal-500/10  dark:from-10% dark:via-slate-800' 
                        :
                         'border-transparent border-r-2 p-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                            <Link href="/" prefetch>Home</Link>
                        </li>
                        <li className={`${pathname === '/projects' 
                        ?
                        'border-black border-r-2 p-2 bg-gradient-to-l from-sky-200/30 from-10% via-white dark:text-white dark:border-teal-500 dark:border-r-4 dark:bg-gradient-to-l dark:from-teal-500/10  dark:from-10% dark:via-slate-800' 
                        :
                         'border-transparent border-r-2 p-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/projects" prefetch>Projects</Link></li>
                        <li className={`${pathname === '/contact' 
                        ?
                        'border-black border-r-2 p-2 pb-3 bg-gradient-to-l from-sky-200/30 from-10% via-white dark:text-white dark:border-teal-500 dark:border-r-4 dark:bg-gradient-to-l dark:from-teal-500/10  dark:from-10% dark:via-slate-800' 
                        :
                         'border-transparent border-r-2 p-2 dark:text-gray-400 dark:hover:text-white ' }`}>
                    <Link href="/contact" prefetch>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}