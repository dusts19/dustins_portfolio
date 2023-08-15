import Link from "next/link"
import ProjectsDisplay from "./ProjectsDisplay"
import ProjectsSoon from "./ProjectsSoon"


export default function Projects() {

    return (
        <div>
            <div className="flex flex-col items-center p-10 w-full dark:bg-inherit mt-10 mb-32">
                <p className="text-6xl mt-10 mb-20">Projects</p>
                <ProjectsDisplay />
                <div className="flex justify-end w-full">
                    <div >
                        <Link href="/projects" >See All Projects</Link>
                    </div>
                </div>
                {/* <ProjectsSoon/> */}

            </div>
            
        </div>
        
    )
}