const express = require("express");
const router = express.Router();
const {
  getAlltasks,
  getTasksByID,
  AddTasks,
  UpdateTasksByID,
  DeleteTasksByID,
} = require("../controller/task");

router.route("/").get(getAlltasks).post(AddTasks);
router
  .route("/:id")
  .get(getTasksByID)
  .patch(UpdateTasksByID)
  .delete(DeleteTasksByID);

module.exports = router;
