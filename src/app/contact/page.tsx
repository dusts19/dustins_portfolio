import Link from "next/link"
import Contact from "../components/Contact"

export default function ContactPage() {
    return (
        <div className="flex min-h-full flex-col items-center justify-between w-full dark:bg-black">
            <p className="pt-10 font-bold text-3xl underline">Contact</p>
            <Contact />
            <div className='pb-5'>
                <Link href="/">Back to Home Page</Link>
            </div>
        </div>
    )
}