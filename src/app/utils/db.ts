'use server'
import mongoose from 'mongoose'

export async function connectToDatabase() {
    const uri = process.env.MONGODB_URI

    if (!uri) {
        throw new Error('MONGODB-URL environment variable is not defined')
    }

    await mongoose.connect(uri)
}