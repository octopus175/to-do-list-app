const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connected to MongoDB server");
    } catch (error) {
        console.log("Cannot connect to MongoDB server", error);
    }
}