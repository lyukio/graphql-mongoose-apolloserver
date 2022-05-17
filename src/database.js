import mongoose from 'mongoose';
require('dotenv').config()

function connectToDatabase() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    const db = mongoose.connection;
    db.on("error", (error) => console.error("Error on connecting to the database.", error))
    db.once("open", () => console.log("📦 Connected to the database!"))
}

module.exports = connectToDatabase