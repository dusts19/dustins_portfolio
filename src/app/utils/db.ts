'use server'
import mongoose from 'mongoose'

const connectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) return;

    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

    if (!uri) {
        throw new Error("MongoDB URI is not defined in environment variable.");
    }
    const db = await mongoose.connect(uri);

    return db;
}
export default connectToDatabase;

// export async function connectToDatabase() {
//     const uri = process.env.MONGODB_URI

//     if (!uri) {
//         throw new Error('MONGODB-URL environment variable is not defined')
//     }

//     await mongoose.connect(uri)
// }