import Image from "next/image"
import Link from "next/link"

type Project = {
    _id: string,
    title: string,
    description: string,
}

export default function ProjectCard({ project }: {project: Project }) {
    const shortDescription = project.description.length > 100 ? project.description.slice(0, 100) + '...' : project.description
    let imgSrc='/images/' + project.title + '.jpg'

    return(
        <div className="border-slate-400">
            <Image src={imgSrc} alt={project.title} width={300} height={200} className="border-2 border-slate-300 h-48" />
            <h2>{project.title}</h2>
            <p className="max-w-xs">{shortDescription}</p>
            {project.title && (<Link href= {`/projects/${project.title}`}>
                {/* <p>See More</p> */}
            </Link>
            )}
        </div>
    )
}
