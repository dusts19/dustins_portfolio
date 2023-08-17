'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes"

import ProjectCard from "./ProjectCard";
import { getProjects } from "../utils/action";
import light_left_arrow from 'public/images/light-left-circle-svgrepo-com.svg'
import light_right_arrow from 'public/images/light-right-circle-svgrepo-com.svg'
import dark_left_arrow from 'public/images/chevron-left-circle-svgrepo-com.svg'
import dark_right_arrow from 'public/images/chevron-right-circle-svgrepo-com.svg'


type Project = {
    _id: string,
    title: string,
    description: string,
}

export default function ProjectsDisplay() {
    const { resolvedTheme } = useTheme()

    const [projects, setProjects] = useState<Project[]> ([])
    const [displayedProjects, setDisplayedProjects] = useState<Project[]>([])
    const [currStartIndex, setCurrStartIndex] = useState(0)

    useEffect(() => {
        getProjects()
        .then((data) => {
            setProjects(data)
            setDisplayedProjects(data.slice(0,3))
        })
    }, [])

    const handleLeftClick = () => {
        if (currStartIndex > 0) {
            const newStartIndex = currStartIndex - 1
            setCurrStartIndex(newStartIndex)
            setDisplayedProjects(projects.slice(newStartIndex, newStartIndex + 3))
        }
    }

    const handleRightClick = () => {
        if (currStartIndex + 3 < projects.length) {
            const newStartIndex = currStartIndex + 1
            setCurrStartIndex(newStartIndex)
            setDisplayedProjects(projects.slice(newStartIndex, newStartIndex + 3))
        }
    }

    return (
        <div className=''>
            <div className="flex items-center xs:-mr-9">
                <button className="mr-4 sm:mr-2 sm:ml-4" onClick={handleLeftClick}>
                    {resolvedTheme === "dark" ? <Image src={dark_left_arrow} alt="dark_mode_left_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16 bg-black rounded-full"/> :
                    <Image src={light_left_arrow} alt="light_mode_left_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16"/>}
                </button>
                <div className="flex items-stretch sm:gap-1 sm:-my-3 sm:h-fit">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>                
                <button className="ml-2" onClick={handleRightClick}>
                    {resolvedTheme === "dark" ? <Image src={dark_right_arrow} alt="dark_mode_right_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16 bg-black rounded-full"/> : <Image src={ light_right_arrow } alt="light_mode_right_arrow" height={10} width={10} className="h-10 w-auto sm:h-12 xs:h-16"/>}
                </button>
            </div>

        </div>

    )
}