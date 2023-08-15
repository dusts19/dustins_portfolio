import Image from 'next/image'
import coffee_fueled_worker from 'public/images/coffee-fueled-worker.svg'

export default function FrontPage() {
    const webDev = ['Next.js', 'Tailwind.css', 'Node/Npm', 'MongoDb', 'SQL']
    const dataSci = ['Python', 'TensorFlow', 'Keras']
    const technologies = ['Git', 'Linux', 'Docker', 'VS Code']
    const dataVis = ['Tableau', 'Excel']

    return (
        <div className="flex flex-col items-center justify-center pt-6 w-full dark:bg-inherit">
            <Image className="h-72 w-72 mt-4 rounded-full bg-teal-500 dark:bg-sky-800" src={coffee_fueled_worker} alt="Coffee Fueled Worker/Placeholder"/>
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
            <div className='flex gap-4'>
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