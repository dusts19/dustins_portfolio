import Image from 'next/image'
import CoffeeFueledWorkerSVG from '../../../public/images/coffee-fueled-worker.svg'
import React from 'react'

const FrontPage: React.FC = () => {
    const webDev = ['Next.js', 'Tailwind.css', 'Spring Boot', 'Node/Npm', 'MongoDb', 'SQL']
    const dataSci = ['Python', 'TensorFlow', 'Keras']
    const technologies = ['Git', 'Linux', 'Docker', 'VS Code']
    const dataVis = ['Tableau', 'Excel']

    return (
        <div className="flex flex-col items-center justify-center pt-6 w-full dark:bg-inherit text-center">
            {/* <Image className="xs:h-36 xs:w-36 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:w-72 lg:h-72 mt-4 rounded-full bg-teal-500 dark:bg-sky-800" src={coffee_fueled_worker} alt="Coffee Fueled Worker/Placeholder"/> */}
            <CoffeeFueledWorkerSVG className="xs:h-36 xs:w-36 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:w-72 lg:h-72 mt-4 rounded-full bg-teal-500 dark:bg-sky-800" />
            <div className="flex flex-col items-center justify-center p-10 space-y-2">
                <h1 className="mx-4 text-3xl font-bold">Dustin Shin</h1>
                <p className='font-semibold'>
                    FullStack Developer
                </p>
                <p>
                    Graduated from California State University, Los Angeles
                </p>
                <p>
                    Site created with Next.js, Typescript, Tailwind.css, & MongoDb
                </p>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
                <div>
                    <p className="text-lg font-bold">Web Dev</p>
                    <ul>
                       {webDev.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-bold">Data Science</p>
                    <ul>
                        {dataSci.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-bold">Technologies</p>
                    <ul>
                        {technologies.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="r-4">
                    <p className="text-lg font-bold">Data Visualization</p>
                    <ul>
                        {dataVis.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default FrontPage;