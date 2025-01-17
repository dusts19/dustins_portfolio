import mongoose, { Document, Schema } from 'mongoose';


const workSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
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
}, {collection: 'works', timestamps: true})


const Works = mongoose.models?.Works || mongoose.model('Works', workSchema)

export default Works