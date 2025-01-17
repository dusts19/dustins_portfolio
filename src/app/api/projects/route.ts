import { NextResponse } from 'next/server';
import connectToDatabase from "../../utils/db";
import Projects from "../../utils/models/projects";

// export async function getProjects() {
//     await connectToDatabase();
//     const projects = await Projects.find({});
//     return new Response(JSON.stringify(projects), {status: 200})
// }

interface Project {
    _id: string,
    title: string,
    description: string,
    technologies: string,
    url: string,
    imageUrl?: string,
}


export async function GET() {
    try {
        await connectToDatabase();

        const data = await Projects.find({})
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({message: 'Error fetching projects' }, { status: 500 });
    }
    
}


export async function POST(req: Request) {
    const body = await req.json();
    const project = new Projects(body);
    await project.save();
    return new Response(JSON.stringify(project), { status: 201 })
}

export async function PUT(req: Request) {
    const body = await req.json();
    const { _id, ...updates } = body as { _id: string; [key: string]: any};
    const project = await Projects.findByIdAndUpdate(_id, updates, {
        new: true,
    });
    return new Response(JSON.stringify(project), { status: 200});
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const { _id } = body as { _id: string };
    await Projects.findByIdAndDelete(_id);
    return new Response(null, {status:204})
}

