const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task_name:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default:false
    },
    deadline:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("task", taskSchema);