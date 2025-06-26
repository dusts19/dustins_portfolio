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

interface ProjectProp{
    projects: Project[]
}

const ProjectsDisplay: React.FC<ProjectProp> = ({projects}) => {
    
    // const [myProjects, setMyProjects] = useState<Project[]> ([])

    // useEffect(() => {
    //     fetch('/api/projects')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setMyProjects(data)
    //     })
    // }, [])

    // useEffect(() => {
    //     getProjects()
    //     .then((data) => {
    //         console.log("Data : " + data);
    //         setProjects(data)
    //     })
    // }, [])

    return (
            <div className="w-full px-4 md:px-12">
                <div className="grid gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    
                    {projects.map((project) => (
                        
                        <ProjectPageCard key={project._id} project={project} /> 
                    ))}
                </div>                
            </div>

    )
}
export default ProjectsDisplay;