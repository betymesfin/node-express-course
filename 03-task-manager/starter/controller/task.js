const Task= require('../models/task')
const getAlltasks = (req, res) => {
  res.send("All items");
};

const getTasksByID = (req, res) => {
  res.json({id:req.params.id});
};

const AddTasks = async (req, res) => {
   const task = await Task.create(req.body);
   res.status(201).json({ task });
};


const UpdateTasksByID = (req, res) => {
  res.send("Update items");
};

const DeleteTasksByID = (req, res) => {
  res.send("Delete items");
};

module.exports = {
  getAlltasks,
  getTasksByID,
  AddTasks,
  UpdateTasksByID,
  DeleteTasksByID,
};
