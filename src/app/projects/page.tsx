import Link from "next/link";
import ProjectsSoon from "../components/ProjectsSoon";
import Display from "./components/Display"


const Projects: React.FC = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center w-full dark:bg-black xs:pl-4 md:pl-12">
                <p  className="pb-10 pt-14 font-bold text-3xl xs:pb-6 xs:pt-10 underline">Projects</p>
                <div className="flex flex-col items-center pt-5 pb-10 h-full w-full dark:bg-inherit">
                    <p className="xs:pb-4">In Progress!</p>
                    <Display />
                    <ProjectsSoon/>
                </div>
                
                <Link className="pb-5 underline"href="/">Back to Home Page</Link>
            </div>
        </div>
    )
}
export default Projects;