import mongoose, { Document, Schema } from 'mongoose';

// interface Project extends Document {
//     title: string;
//     description: string;
//     technologies: string;
//     url: string;
//     imageUrl?: string;
// }


const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    }
}, {collection: 'projects', timestamps: true})

const Projects = mongoose.models?.Project || mongoose.model('Project', projectSchema)

export default Projects