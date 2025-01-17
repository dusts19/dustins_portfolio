import connectToDatabase from "../utils/db";
import Visitor from "../utils/models/visitors";

export async function GET(req: Request) {
    await connectToDatabase();
    const visitors = await Visitor.find({})
    return new Response(JSON.stringify(visitors), {status: 200})
}

export async function POST(req: Request) {
    const body = await req.json();
    const visitor = new Visitor(body);
    await visitor.save();
    return new Response(JSON.stringify(visitor), {status: 201})
}

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

// import { NextApiRequest, NextApiResponse } from "next";
// import { connectToDatabase } from "../utils/db";
// import Visitor from "../utils/models/visitors";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse,
// ) {
//     await connectToDatabase();

//     if ( req.method === 'GET' ) {
//         const visitors = await Visitor.find({})
//         res.status(200).json(visitors)
//     } else if ( req.method === 'POST' ) {
//         const visitors = new Visitor(req.body);
//         await visitors.save();
//         res.status(201).json(visitors)
//     } else if ( req.method === 'PUT') {
//         const { _id, ...updates } = req.body as { _id: string; [key: string]: any}
//         const visitor = await Visitor.findByIdAndUpdate( _id, updates,{
//             new: true,
//         })
//         res.status(200).json(visitor)
//     } else if (req.method === 'DELETE') {
//         const { _id } = req.body as { _id: string }
//         await Visitor.findByIdAndDelete(_id)
//         res.status(204).end()
//     }
// }