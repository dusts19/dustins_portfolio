'use client'
import { useState, useEffect } from "react";

import ProjectPageCard from "./ProjectPageCard";
// import { getProjects } from "../../utils/action";
// import { getProjects } from "../../api/projects/route";

interface Project {
    _id: string,
    title: string,
    description: string,
    technologies: string,
    url: string,
    imageUrl?: string,
}

const ProjectsDisplay: React.FC = () => {
    
    const [projects, setProjects] = useState<Project[]> ([])

    useEffect(() => {
        fetch('/api/projects')
        .then((response) => response.json())
        .then((data) => {
            setProjects(data)
        })
    }, [])

    // useEffect(() => {
    //     getProjects()
    //     .then((data) => {
    //         console.log("Data : " + data);
    //         setProjects(data)
    //     })
    // }, [])

    return (
        <div className=''>
            <div className="flex xs:pl-12 xs:mb-5 md:pr-2 md:pl-4">
                <div className="grid items-center lg:grid-cols-3 xs:gap-1 xs:grid-cols-1 xs:space-y-3 md:grid-cols-2">
                    {projects.map((project) => (
                        
                        <ProjectPageCard key={project._id} project={project} /> 
                    ))}
                </div>                
            </div>

        </div>

    )
}
export default ProjectsDisplay;