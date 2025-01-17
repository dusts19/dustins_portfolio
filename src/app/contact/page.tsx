import Link from "next/link"
import Contact from "../components/Contact"


const ContactPage: React.FC = () => {
    return (
        <div className="flex min-h-full flex-col items-center justify-between w-full dark:bg-black">
            <p className="pt-10 xs:pl-12 font-bold text-3xl underline">Contact</p>
            <Contact />
            <div className='pb-5 xs:pl-8 underline'>
                <Link href="/">Back to Home Page</Link>
            </div>
        </div>
    )
}
export default ContactPage;