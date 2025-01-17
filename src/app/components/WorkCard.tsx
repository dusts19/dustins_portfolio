import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import sample_1 from "public/images/sample_1.jpg"
import sample_2 from "public/images/sample_2.jpg"
import sample_3 from "public/images/sample_3.jpg"
import sample_4 from "public/images/sample_4.jpg"
import sample_5 from "public/images/sample_5.jpg"
import Works from "../utils/models/works"


interface Work {
    _id: string,
    title: string,
    position: string,
    description: string,
    duration: string,
    url: string,
    imageUrl?: string,
}

interface WorkCardProps {
    work: Work;
}

const WorkCard: React.FC< WorkCardProps> = ({ work }) => {
    let pathname = usePathname() || '/'

    const shortDescription = work.description.length > 150 ? work.description.slice(0, 100) + '...' : work.description
    let imgSrc='/images/' + work.title + '.jpg'

    return(
        <div className="xs:px-0.5">
            {work.imageUrl && (
                <Image 
                    src={`/images/${work.imageUrl}.jpg`} 
                    // src={imgSrc} 
                    alt={work.title} 
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
            <h2 className="xs:font-semibold md:pb-2 xs:pb-1">{work.title}</h2>
            <p className="max-w-xs flex-grow xs:text-sm xs:pr-1">{work.position}</p>
            <p className="max-w-xs flex-grow xs:text-sm xs:pr-1">{shortDescription}</p>
            <p className="max-w-xs flex-grow xs:text-sm xs:pr-1">{work.duration}</p>
            <Link href={`${work.url}`} className="max-w-xs flex-grow xs:text-sm xs:pr-1 underline text-blue-500 hover:text-blue-800 visited:text-purple-600">{work.url}</Link>
            {work.title && (<Link href= {`/works/${work.title}`}>
                {/* <p>See More</p> */}
            </Link>
            )}
        </div>
    )
}
export default WorkCard;