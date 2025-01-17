import { NextResponse } from 'next/server';
import connectToDatabase from "../../utils/db";
import Works from "../../utils/models/works";


interface Work {
    _id: string,
    title: string,
    position: string,
    description: string,
    duration: string,
    url: string,
    imageUrl?: string,
}




export async function GET() {
    try {
        await connectToDatabase();

        const data = await Works.find({})
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching works:', error);
        return NextResponse.json({message: 'Error fetching works' }, { status: 500 });
    }
    
}

export async function POST(req: Request) {
    const body = await req.json();
    const work = new Works(body);
    await work.save();
    return new Response(JSON.stringify(work), { status: 201 })
}

export async function PUT(req: Request) {
    const body = await req.json();
    const { _id, ...updates } = body as { _id: string; [key: string]: any};
    const project = await Works.findByIdAndUpdate(_id, updates, {
        new: true,
    });
    return new Response(JSON.stringify(project), { status: 200});
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const { _id } = body as { _id: string };
    await Works.findByIdAndDelete(_id);
    return new Response(null, {status:204})
}

