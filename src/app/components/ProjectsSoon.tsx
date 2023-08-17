import Image from "next/image"
import person_thinking from "public/images/person-thinking.svg"
import light from "public/images/light.svg"

export default function ProjectsSoon () {
    return (
        <div className="flex flex-col items-center p-10 h-full w-full xs:p-12 xs:-mr-4 dark:bg-inherit">
            <p>Working on more!</p>
            <div className="flex items-center xs:w-auto xs:mt-10 xs:pl:16">
                <Image 
                    className="h-60 sm:h-40 xs:h-28 xs:-m-0.5 w-auto mt-3 p-8  py-6 dark:rounded-tl-md dark:rounded-bl-lg dark:bg-gradient-to-br dark:from-slate-900 dark:from-15% dark:via-slate-300 dark:via-20% dark:to-yellow-400 dark:to-60%"
                    src={light}
                    alt="Person thinking"
                />
                <Image 
                    className="h-60 sm:h-40 xs:h-28 xs:-m-1  w-auto mt-3 p-8 dark:rounded-tr-lg dark:rounded-br-md  dark:bg-gradient-to-r dark:from-yellow-400 dark:from-60% dark:via-yellow-100 dark:via-90% dark:to-slate-900"
                    src={person_thinking}
                    alt="Person thinking"   
                />         
            </div>
        </div>
    )
}