'use client'
import { useState, useEffect } from "react";

import ProjectCard from "../../components/ProjectCard"
import { getProjects } from "../../utils/action";

type Project = {
    _id: string,
    title: string,
    description: string,
}

export default function ProjectsDisplay() {
    
    const [projects, setProjects] = useState<Project[]> ([])

    useEffect(() => {
        getProjects()
        .then((data) => {
            setProjects(data)
        })
    }, [])

    return (
        <div className=''>
            <div className="flex xs:pl-12 xs:mb-5 md:pr-2 md:pl-4">
                <div className="grid items-center lg:grid-cols-3 xs:gap-1 xs:grid-cols-1 xs:space-y-3 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>                
            </div>

        </div>

    )
}