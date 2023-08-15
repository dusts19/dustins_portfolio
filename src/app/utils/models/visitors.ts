import mongoose from 'mongoose'

const VisitorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },

}, {collection: 'visitors'})

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema)

export default Visitor