import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../utils/db";
import Projects from "../utils/models/projects";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await connectToDatabase()

    if (req.method === 'GET') {
        const projects = await Projects.find({})
        res.status(200).json(projects)
    } else if (req.method === 'POST') {
        const project = new Projects(req.body)
        await project.save()
        res.status(201).json(project)
    } else if (req.method === 'PUT') {
        const { _id, ...updates } = req.body as {_id:string; [key:string]: any}
        const project = await Projects.findByIdAndUpdate(_id, updates, {
            new: true,
        })
        res.status(200).json(project);
    } else if (req.method === 'DELETE') {
        const { _id } = req.body as { _id: string }
        await Projects.findByIdAndDelete( _id )
        res.status(204).end()
    }
}