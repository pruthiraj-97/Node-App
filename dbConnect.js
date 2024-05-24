import mongoose from 'mongoose'
export const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('database connnected')
    } catch (error) {
        console.log("error in db connect",error)
    }
}