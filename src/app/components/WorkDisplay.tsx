'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes"

import ProjectCard from "./ProjectCard";
// import { getProjects } from "../utils/action";
// import { getProjects } from "../api/projects/route";
// import light_left_arrow from 'public/images/light-left-circle-svgrepo-com.svg'
// import light_right_arrow from 'public/images/light-right-circle-svgrepo-com.svg'
// import dark_left_arrow from 'public/images/chevron-left-circle-svgrepo-com.svg'
// import dark_right_arrow from 'public/images/chevron-right-circle-svgrepo-com.svg'
import WorkCard from './WorkCard';

    interface Work {
        _id: string,
        title: string,
        position: string,
        description: string,
        duration: string,
        url: string,
        imageUrl?: string,
    }

const WorkDisplay: React.FC = () => {
    const { resolvedTheme } = useTheme()

    const [works, setWorks] = useState<Work[]> ([])
    const [displayedWorks, setDisplayedWorks] = useState<Work[]>([])
    const [currStartIndex, setCurrStartIndex] = useState(0)

    useEffect(() => {
        fetch('/api/works')
        .then((response) => response.json())
        .then((data) => {
            setWorks(data)
            setDisplayedWorks(data.slice(0,3))
        })
        .catch((error) => console.error('Error fetching projects:', error));
    }, [])

    const handleLeftClick = () => {
        if (currStartIndex > 0) {
            const newStartIndex = currStartIndex - 1
            setCurrStartIndex(newStartIndex)
            setDisplayedWorks(works.slice(newStartIndex, newStartIndex + 3))
        }
    }

    const handleRightClick = () => {
        if (currStartIndex + 3 < works.length) {
            const newStartIndex = currStartIndex + 1
            setCurrStartIndex(newStartIndex)
            setDisplayedWorks(works.slice(newStartIndex, newStartIndex + 3))
        }
    }

    return (
        <div className='xs:pl-10 xs:pr-2'>
            <div className="flex items-center-9">
                <button className="" onClick={handleLeftClick}> 
                    <svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto sm:h-12 xs:h-10 dark:fill-white">
                    <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.4102 16.4199L10.3502 13.55C10.1944 13.4059 10.0702 13.2311 9.98526 13.0366C9.9003 12.8422 9.85645 12.6321 9.85645 12.4199C9.85645 12.2077 9.9003 11.9979 9.98526 11.8035C10.0702 11.609 10.1944 11.4342 10.3502 11.29L13.4102 8.41992" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                     {/* <Image src={dark_left_arrow} alt="dark_mode_left_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16 bg-black rounded-full"/> : */}
                     {/* <Image src={light_left_arrow} alt="light_mode_left_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16"/> */}
                </button>
                <div className="flex items-stretch sm:gap-1 sm:-my-3 sm:h-fit">
                    {displayedWorks.map((work) => (
                        <WorkCard key={work._id} work={work} />
                    ))}
                </div>                
                <button className="" onClick={handleRightClick}>
                    <svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto sm:h-12 xs:h-10 dark:fill-white">
                    <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

        </div>

    )
}
export default WorkDisplay;