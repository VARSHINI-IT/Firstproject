import mongoose from "mongoose";

const connectDB = async() => {
    console.log(process.env.MODBURL)
    try {
        await mongoose.connect(process.env.MODBURL)
        console.log("Database connected")
    } catch(error) {
        console.log(error)
    }
}

export default connectDB;