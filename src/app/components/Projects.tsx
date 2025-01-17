import Link from "next/link"
import ProjectsDisplay from "./ProjectsDisplay"
import ProjectsSoon from "./ProjectsSoon"



const Projects: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center  w-full dark:bg-inherit  md:mb-32 sm:mb-24">
                <p className="text-6xl xs:text-3xl mt-10 mb-20 xs:mb-10">Projects</p>
                <ProjectsDisplay />
                <div className="flex justify-end w-full mt-4 xs:mb-10">
                    <Link className="xs:pr-2 underline inline-flex" href="/projects" >
                        <span className="">See All Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </div>
                {/* <ProjectsSoon/> */}

            </div>
            
        </div>
        
    )
}
export default Projects;
