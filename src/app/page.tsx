import Image from 'next/image'
import FrontPage from './components/FrontPage'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full dark:bg-black xs:pl-6">
      <FrontPage />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
}
