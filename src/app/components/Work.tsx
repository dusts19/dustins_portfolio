import WorkDisplay from './WorkDisplay'

interface Work {
    _id: string,
    title: string,
    position: string,
    description: string,
    duration: string,
    url: string,
    imageUrl?: string,
}
interface WorkProps {
// title: string; position: string; description: string; duration: string; url: string; imageUrl?: string ;
    works: Work[],
}
  

const WorkPage: React.FC<WorkProps> = ({works}) => {
    return (
        <div>
            <div className="flex flex-col items-center w-full dark:bg-inherit mt-20  sm:mb-24">
                <p className="text-6xl xs:text-3xl mt-10 mb-20 xs:mb-10">Work</p>
                <WorkDisplay works={works}/>
                <div className="flex justify-end w-full mt-4 xs:mb-10">
                </div>
                {/* <ProjectsSoon/> */}

            </div>
            
        </div>
    )
}
export default WorkPage;