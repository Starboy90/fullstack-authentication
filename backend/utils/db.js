
const mongoose = require("mongoose");

const URI= process.env.MONGODB_URI;

console.log(URI);
const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connect succesfull");

    }
    catch(error){
        console.error("Database Not Connect");
        process.exit(0);
    }};

    module.exports =connectDB;