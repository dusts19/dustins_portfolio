import Image from "next/image"
import Link from "next/link"
import sample_1 from "public/images/sample_1.jpg"
import sample_2 from "public/images/sample_2.jpg"
import sample_3 from "public/images/sample_3.jpg"
import sample_4 from "public/images/sample_4.jpg"
import sample_5 from "public/images/sample_5.jpg"

type Project = {
    _id: string,
    title: string,
    description: string,
}

export default function ProjectCard({ project }: {project: Project }) {
    const shortDescription = project.description.length > 100 ? project.description.slice(0, 100) + '...' : project.description
    let imgSrc='/images/' + project.title + '.jpg'

    return(
        <div className="xs:px-0.5">
            <Image src={imgSrc} alt={project.title} width={300} height={200} className="border-2 border-slate-300 h-48" />
            <h2 className="xs:font-semibold">{project.title}</h2>
            <p className="max-w-xs flex-grow xs:text-sm">{shortDescription}</p>
            {project.title && (<Link href= {`/projects/${project.title}`}>
                {/* <p>See More</p> */}
            </Link>
            )}
        </div>
    )
}
