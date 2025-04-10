const {people} = require("../data");

const addPerson = (req,res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide a name" });
  }
  else{
    people.push({ id: people.length + 1, name});
    res.status(201).json({ success: true, name });
  }
}
const getPeople =(req,res) => {
   res.status(200).json(people);
}

const deletePerson = (req, res) => {
    const { id } = req.params
  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}
 module.exports = {addPerson,getPeople,deletePerson,updatePerson}