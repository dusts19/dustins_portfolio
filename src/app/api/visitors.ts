import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../utils/db";
import Visitor from "../utils/models/visitors";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await connectToDatabase();

    if ( req.method === 'GET' ) {
        const visitors = await Visitor.find({})
        res.status(200).json(visitors)
    } else if ( req.method === 'POST' ) {
        const visitors = new Visitor(req.body);
        await visitors.save();
        res.status(201).json(visitors)
    } else if ( req.method === 'PUT') {
        const { _id, ...updates } = req.body as { _id: string; [key: string]: any}
        const visitor = await Visitor.findByIdAndUpdate( _id, updates,{
            new: true,
        })
        res.status(200).json(visitor)
    } else if (req.method === 'DELETE') {
        const { _id } = req.body as { _id: string }
        await Visitor.findByIdAndDelete(_id)
        res.status(204).end()
    }
}