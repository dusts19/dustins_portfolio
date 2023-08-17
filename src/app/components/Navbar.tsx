import Link from "next/link"
import Image from "next/image"
import github from 'public/images/github.svg'
import linkedin from 'public/images/linkedin.svg'
// alt for resume logo link
// import resume from 'public/images/Dustin_Resume.pdf'
// import document from 'public/images/document.svg'



export default function Navbar() {
    return(
        <nav className="fixed flex flex-col top-16 left-0 h-screen w-24 sm:w-20 xs:w-16 bg-gradient-to-r from-white via-sky-100 to-white py-6 dark:from-slate-900 dark:via-sky-100 dark:to-slate-900">
            <div className="list-none flex flex-col items-center sm:p-2 sm:mt-4 mt-8 xs:mt-3 space-y-6">
                <div className="">
                    <Link href="https://github.com/dusts19" target="_blank" className="">
                        <Image src={github} alt="github" className="h-10 w-auto"/>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.linkedin.com/in/dustin-shin/" target="_blank" className="">
                        <Image src={linkedin} alt="linkedin" className="h-10 w-auto"/>
                    </Link>
                </div>        
                {/* <div>
                    <Link href={resume} target="_blank" className="">
                        <Image src={document} alt="resume" className="h-10 w-auto"/>
                    </Link>                
                </div> */}
            </div>
        </nav>
    )
}