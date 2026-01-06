import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> { //here void depicts that we dont care what type of data is getting returned
    if(connection.isConnected) {
        console.log("ALready connected to database")
        return 
    }

    try {
        const db =  await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1)
    }
}

export default dbConnect;