const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("Connected to MongoDB server");
    } catch (error) {
        console.log("Cannot connect to MongoDB server", error);
    }
}