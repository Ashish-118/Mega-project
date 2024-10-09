// require('dotenv').config({ path: './env' })  //  Actually this is the default code  and it will work very fine but you can see that by doing so it breaks the order or structure of code  , so you can also using import as below

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB() // funciton call 




















/*
// iffe function
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error when express is not able to talk with database ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log("we are listening on port " + process.env.PORT)

        })
    }
    catch (error) {
        console.error("Hello! Ashish ,  Error connecting to MongoDB:", error);
        throw error
    }
})()

*/