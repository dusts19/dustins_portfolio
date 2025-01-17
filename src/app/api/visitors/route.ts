import { NextResponse } from 'next/server';
import connectToDatabase from "../../utils/db";
import Visitor from "../../utils/models/visitors";

export async function GET(req: Request) {
    await connectToDatabase();
    const visitors = await Visitor.find({})
    return new Response(JSON.stringify(visitors), {status: 200})
}

export async function POST(req: Request) {
    try{
        const {username, email, subject, message } = await req.json();

        if (!username || !message) {
            return NextResponse.json({ message: 'Username and message are required.' }, { status: 400 });
        }
        await connectToDatabase();

        const newVisitor = new Visitor({ username, email, subject, message });
        await newVisitor.save();

        return NextResponse.json({ message: 'Visitor data saved successfully.' }, { status: 201 });
    } catch (error) {
        console.error('Error saving visitor data:', error);
        return NextResponse.json({ message: 'Error saving visitor data'}, { status: 500 })
    }
    }

// export async function POST(req: Request) {
//     const body = await req.json();
//     const visitor = new Visitor(body);
//     await visitor.save();
//     return new Response(JSON.stringify(visitor), {status: 201})
// }

export async function PUT(req: Request) {
    const body = await req.json();
    const { _id, ...updates } = body as { _id: string; [key: string]: any};
    const  visitor = await Visitor.findByIdAndUpdate(_id, updates, {
        new: true,
    });
    return new Response(JSON.stringify(visitor), {status: 200});
}

export async function DELETE(req: Request) {
    const body = await req.json();
    const { _id } = body as { _id: string };
    await Visitor.findByIdAndDelete(_id);
    return new Response(null, {status: 204})
}
