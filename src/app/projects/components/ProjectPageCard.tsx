import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import sample_1 from "public/images/sample_1.jpg"
import sample_2 from "public/images/sample_2.jpg"
import sample_3 from "public/images/sample_3.jpg"
import sample_4 from "public/images/sample_4.jpg"
import sample_5 from "public/images/sample_5.jpg"


interface Project {
    _id: string,
    title: string,
    description: string,
    technologies: string,
    url: string,
    imageUrl?: string,
}

interface ProjectPageCardProps {
    project: Project;
}

const ProjectPageCard: React.FC< ProjectPageCardProps> = ({ project }) => {
    let pathname = usePathname() || '/'

    // const shortDescription = project.description.length > 100 ? project.description.slice(0, 100) + '...' : project.description
    let imgSrc='/images/' + project.imageUrl + '.jpg'

    return(
        <div className="flex flex-col justify-between border-2 border-slate-300 rounded-md p-4 min-h-[400px] max-w-xs bg-white dark:bg-gray-900">
            <div>
                {project.imageUrl && (
                    <Image 
                        src={imgSrc} 
                        alt={project.title} 
                        width={300} 
                        height={200} 
                        className={`${
                            pathname === '/'
                            ? 'border border-slate-300 mb-4 w-full h-48 object-cover' 
                            : 'border border-slate-300 w-full h-48 object-cover' 
                        }`} 
                        loading="lazy" 
                    />
                )}
                <h2 className="font-semibold text-lg mb-4">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            </div>
            <div className="mt-auto">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{project.technologies}</p>
                <Link href={`${project.url}`} className="text-sm xs:pr-1 underline text-blue-500 hover:text-blue-800 visited:text-purple-600">{project.url}</Link>
                {project.title && (<Link href= {`/projects/${project.title}`}>
                    {/* <p>See More</p> */}
                </Link>
                )}
            </div>
        </div>
    )
}
export default ProjectPageCard;