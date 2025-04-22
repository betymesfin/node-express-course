const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  deletePerson,
  updatePerson,
  getPersonByID,
} = require("../controllers/people.js");

router.get("/", getPeople);
router.post("/", addPerson);
router.delete("/:id", deletePerson);
router.put("/:id", updatePerson);
router.get("/:id", getPersonByID);

//router.route('/').get(getPeople).post(createPerson).delete(deletePerson)
module.exports = router;
