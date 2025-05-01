const Task = require("../models/task");
const asyncWrapper = require('../middleware/aysncwrapper')
const{createCustomError} = require('../errors/custom-error')

const getAlltasks =asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks,amount:tasks.length });
 
});

const getTasksByID = asyncWrapper(async (req, res,next) => {
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id: TaskID });
    if (!task) {
      return next(createCustomError(`no task found with this: ${TaskID}`,404));
    }
    res.status(200).json({ task });
});

const AddTasks = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
});

const UpdateTasksByID = asyncWrapper( async (req, res,next) => {
    const { id: TaskID } = req.params;
    const updatedTask = req.body;
    const task = await Task.findOneAndUpdate({ _id: TaskID }, updatedTask, {
      runValidators: true,
    });
    if (!task) {
      return next(
        createCustomError(`no task found with this: ${TaskID} to update`, 404)
      );
      }
    res.status(200).json({ updatedTask });
});

const DeleteTasksByID = asyncWrapper (async (req, res,next) => {
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });
    if (!task) {
      return next(
       createCustomError(`no task found with this: ${TaskID} to delete`, 404)
      );
    }
    res.status(200).json({ msg: `task with this ${TaskID} id is deleted` });
});

module.exports = {
  getAlltasks,
  getTasksByID,
  AddTasks,
  UpdateTasksByID,
  DeleteTasksByID,
};
