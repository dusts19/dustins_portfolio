import Image from 'next/image'
import FrontPage from './components/FrontPage'
import Projects from './components/Projects'
import WorkPage from './components/Work'
import Contact from './components/Contact'
import { GetStaticProps } from 'next';
import mongoose from 'mongoose';
import Works from './utils/models/works';

interface Work {
  _id: string,
  title: string,
  position: string,
  description: string,
  duration: string,
  url: string,
  imageUrl?: string,
}



const Home: React.FC = async () => {
  const DB_URI = `${process.env.MONGODB_URI}` || 'mongodb://localhost:27017/portfolio';
  console.log("MongoDB URI:", DB_URI);
  console.log('MongoDB connection state:', mongoose.connections[0].readyState);

  // const data = await fetch(DB_URI);
  // const works = await data.json();
  if (mongoose.connections[0].readyState === 0) {
    await mongoose.connect(DB_URI)
  } else {
    console.log("MongoDB already connected")
  }
  const works = await Works.find({}).lean();
  console.log("Fetched works" , works);
  if (!works.length) {
    console.log("No works found in the database")
  }
  try {
    const worksData: Work[] = works.map((work) => ({
    _id: String(work._id),
    title: work.title,
    position: work.position,
    description: work.description,
    duration: work.duration,
    url: work.url,
    imageUrl: work.imageUrl || "",

  }
));

  console.log("works" , works);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full dark:bg-black xs:pl-6">
      <FrontPage />
      <WorkPage  />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
} catch (error) {
  console.log("Error fetching works:", error);
  return(
    <div>Error fetching data</div>
  )
}

}
export default Home;


// const Home: React.FC = () => {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between w-full dark:bg-black xs:pl-6">
//       <FrontPage />
//       <Work />
//       <Projects />
//       {/* <Contact /> */}
//     </main>
//   )
// }
// export default Home;


