'use server'

import { connectToDatabase } from './db'
import Projects from './models/projects'
import Visitor from './models/visitors'

type ProjectsData = {
    title: string,
    description: string,
    technologies: string,
    date: string,
}

type FormData = {
    username: string,
    email: string,
    subject: string,
    message: string,
}

export async function getProjects(){
    'use server'
    await connectToDatabase();

    const data = await Projects.find({})

    const plainData = data.map(item => ({
        _id: item._id.toString(),
        title: item.title,
        description: item.description,
        technologies: item.technologies,
        date: item.date.toISOString(),
    }))

    return plainData;
}

export async function postEntry(formData: FormData){
    'use server'
    await connectToDatabase();
    
    const data = await Visitor.create({
        username: formData.username,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
    })
    
}