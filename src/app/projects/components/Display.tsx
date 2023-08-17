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
            <div className="flex items-center xs:pl-10 xs:-m-2 xs:mb-5">
                <div className="grid lg:grid-cols-3 gap-1 xs:grid-cols-1 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>                
            </div>

        </div>

    )
}