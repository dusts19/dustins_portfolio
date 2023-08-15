import mongoose from 'mongoose'

const ProjectsSchema = new mongoose.Schema({
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
    date: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, {collection: 'myprojects'})

const Projects = mongoose.models.Myprojects || mongoose.model('Myprojects', ProjectsSchema)

export default Projects