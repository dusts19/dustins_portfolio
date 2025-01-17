import Link from "next/link";
import ProjectsSoon from "../components/ProjectsSoon";
import Display from "./components/Display"
import mongoose from 'mongoose';
import MyProjects from "../utils/models/projects";


interface MyProject {
    _id: string,
    title: string,
    description: string,
    technologies: string,
    url: string,
    imageUrl?: string,
}



const Projects: React.FC = async () => {
    
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
    const projects = await MyProjects.find({}).lean();
    console.log("Fetched works" , projects);
    if (!projects.length) {
        console.log("No works found in the database")
    }
    try {
        const worksData: MyProject[] = projects.map((project) => ({
        _id: String(project._id),
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        url: project.url,
        imageUrl: project.imageUrl || "",

    }
    ));

  console.log("projects" , projects);
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center w-full dark:bg-black xs:pl-4 md:pl-12">
                <p  className="pb-10 pt-14 font-bold text-3xl xs:pb-6 xs:pt-10 underline">Projects</p>
                <div className="flex flex-col items-center pt-5 pb-10 h-full w-full dark:bg-inherit">
                    <p className="xs:pb-4">In Progress!</p>
                    <Display projects={worksData}/>
                    <ProjectsSoon/>
                </div>
                
                <Link className="pb-5 underline"href="/">Back to Home Page</Link>
            </div>
        </div>
    )
} catch (error) {
    console.log("Error fetching works:", error);
    return(
      <div>Error fetching data</div>
    )
  }
  
  }
export default Projects;