const express = require("express");
const router = express.Router();
const { addPerson, getPeople,deletePerson ,updatePerson} = require("../controllers/people.js");


router.get('/',getPeople)
router.post('/',addPerson)
router.delete('/:id',deletePerson)
router.put('/:id', updatePerson)

//router.route('/').get(getPeople).post(createPerson).delete(deletePerson)
 module.exports = router