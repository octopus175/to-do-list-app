const task = require("../models/task");

const express = require("express");
const { default: mongoose } = require("mongoose");
const { update } = require("../models/task");
const router = express.Router();

const checkRecordId = async(req, res, next) =>  {
    //secuirty check
    if (mongoose.Types.ObjectId.isValid(req.body.taskId)) {
        try {
            const checkExistance = await task.exists({_id: req.body.taskId});
            if (checkExistance) {
                return next();
            } else {
                res.send("record not found");
            }
        } catch (error) {
            res.send(error);
        }
    } else {
        res.send("not a valid object id");
        
    }
}

const checkRequestData = async(req, res, next) => {
    //TO DO: sanitize request body
    let security_check = true;
    //perform check on req.body
    if (security_check) {
        return next();
    } else {
        res.send("request body fail to pass security check");
    }
}

//retrieve task list
router.get('/getTasks', async (req, res, next) => {
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
        console.log("Creating new task, returning attribute:", req.body);
        const newTask = await new task(req.body).save();
        res.send(newTask);
    } catch (error) {
        console.log("Cannot create new task, returning error:", error);
        res.send(error);
    }

});

//update status of a task
router.patch('/updateTask', checkRecordId, checkRequestData, async (req, res, next) => {
    //check if record exists in db

    //if yes then check on data

    //use mongoose to update
    try {
        const updateTask = await task.findByIdAndUpdate(req.body.taskId, {
            completed: req.body.completed,
        });
        console.log("updated task", updateTask)
        res.send(updateTask);
    } catch (error) {
        console.log("Cannot update task, returning error:", error);
        res.send(error)
    }
    //
});

//delete task
router.delete('/deleteTask', async (req, res, next) => {
    //check if record exists

    //use mongoose to delete
    try {
        console.log("trying to delete item, returning task id:", req.query.task_id);
        const deleteTask = await task.findByIdAndDelete(req.query.task_id);
        res.send(deleteTask);
    } catch (error) {
        console.log("Cannot delete task, returning error:", error);
        res.send(error)
    }
});

module.exports = router;