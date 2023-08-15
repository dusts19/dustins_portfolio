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
            <div className="flex items-center">
                <div className="grid grid-cols-3 gap-1">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>                
            </div>

        </div>

    )
}