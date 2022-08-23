const task = require("../models/task");

const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

//retrieve task list
router.get('/', async (req, res, next) => {
    try {
        //retrieve all data using mongoose
        const allTask = await task.find();
        //send it back to client
        res.send(allTask);
    } catch (error) {
        res.send(error)
    }
    
});

//add new task
router.post('/addTask', checkRequestData, async (req, res, next) => {
    //perform check on data, maybe we can use middleware?
    
    //if data pass check use mongoose to upload to db
    try {
        const newTask = await new task(req.body).save();
    } catch (error) {
        console.log("Cannot create new task, returning error:", error);
        res.send(error);
    }

});

//update status of a task
router.post('/updateTask', checkRecordId, checkRequestData, async (req, res, next) => {
    //check if record exists in db

    //if yes then check on data

    //use mongoose to update
    try {
        const updateTask = await task.findByIdAndUpdate(req.body.taskId);
    } catch (error) {
        console.log("Cannot update task, returning error:", error);
        res.send(error)
    }
    //
});

//delete task
router.post('/deleteTask', checkRecordId, async (req, res, next) => {
    //check if record exists

    //use mongoose to delete
    try {
        const deleteTask = await task.findByIdAndDelete(req.body.taskId);
    } catch (error) {
        console.log("Cannot delete task, returning error:", error);
        res.send(error)
    }
});

async function checkRecordId(req, res, next) {
    //secuirty check
    if (mongoose.Types.ObjectId.isValid(req.body.taskId)) {
        try {
            const checkExistance = await task.exists({_id: req.body.taskId});
            return next();
        } catch (error) {
            console.log("Cannot check record id, returning error:", error);
        }
    } else {
        res.send("not a object id");
    }
}

function checkRequestData(req, res, next) {
    // implement security check in the future
    let security_check = true;
    if (security_check) {
        return next();
    } else {
        res.send("request body fail to pass security check");
    }
}