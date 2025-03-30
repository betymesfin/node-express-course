const { writeFile,readFile } = require("fs").promises; 

writeFile('./temporary/temp2.txt', "This is the First line \n", { flag: 'a' })  
 .then(() => {  
    return writeFile('./temporary/temp2.txt', "This is the Second line \n", { flag: 'a' })  
 })  
 .then(() => {
    return writeFile('./temporary/temp2.txt', "This is the Third line \n", { flag: 'a' }) 
 })
 .then(() => {
    return readFile('./temporary/temp2.txt', 'utf8'); 
  }) 
  .then((data) => {
    console.log("File Content:\n", data); 
  })
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  