const mongoose = require('mongoose')


const connectionString = process.env.MONGO_URI.replace("<username>", process.env.USER).replace("<db_password>", process.env.PASS)

console.log("connectionString is:", connectionString);

const connectMDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MONGO Connected successfully");
    } catch (error) {
        console.log("Error connecting to MONGO:", error);
        process.exit(1);
    }
}

module.exports = connectMDB;