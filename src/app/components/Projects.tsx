import Link from "next/link"
import ProjectsDisplay from "./ProjectsDisplay"
import ProjectsSoon from "./ProjectsSoon"


export default function Projects() {

    return (
        <div>
            <div className="flex flex-col items-center px-10 w-full dark:bg-inherit mt-10 md:mb-32 sm:mb-24">
                <p className="text-6xl mt-10 mb-20 xs:mb-14">Projects</p>
                <ProjectsDisplay />
                <div className="flex justify-end w-full mt-4 xs:mb-10">
                    <div >
                        <Link href="/projects" >See All Projects</Link>
                    </div>
                </div>
                {/* <ProjectsSoon/> */}

            </div>
            
        </div>
        
    )
}