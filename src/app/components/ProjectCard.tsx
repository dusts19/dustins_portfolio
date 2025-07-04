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

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC< ProjectCardProps> = ({ project }) => {
    let pathname = usePathname() || '/'

    const shortDescription = project.description.length > 100 ? project.description.slice(0, 100) + '...' : project.description
    let imgSrc='/images/' + project.title + '.jpg'

    return(
        <div className="xs:px-0.5">
            {project.imageUrl && (
                <Image 
                    src={`/images/${project.imageUrl}.jpg`} 
                    // src={imgSrc} 
                    alt={project.title} 
                    width={300} 
                    height={200} 
                    className={`${
                        pathname === '/'
                        ? 'border-2 border-slate-300 mb-5 md:h-48 sm:h-36 sm:mb-3' 
                        : 'border-2 border-slate-300 h-48' 
                    }`} 
                    loading="lazy" 
                />
            )}
            <h2 className="xs:font-semibold md:pb-2 xs:pb-1">{project.title}</h2>
            <p className="max-w-xs flex-grow xs:text-sm xs:pr-1">{shortDescription}</p>
            {project.title && (<Link href= {`/projects/${project.title}`}>
                {/* <p>See More</p> */}
            </Link>
            )}
        </div>
    )
}
export default ProjectCard;