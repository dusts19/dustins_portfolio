import WorkDisplay from './WorkDisplay'

const WorkPage: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-full dark:bg-inherit mt-20  sm:mb-24">
                <p className="text-6xl xs:text-3xl mt-10 mb-20 xs:mb-10">Work</p>
                <WorkDisplay />
                <div className="flex justify-end w-full mt-4 xs:mb-10">
                </div>
                {/* <ProjectsSoon/> */}

            </div>
            
        </div>
    )
}
export default WorkPage;