const Grading =(student) => {
    if (student.GPA > 3.5)
        {
        console.log("High score");
        }
    else(student.GPA < 2.5)
    {
        console.log("Low");
    }
    console.log("Great");
}

module.exports = Grading;