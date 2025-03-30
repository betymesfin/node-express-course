const { writeFile,readFile } = require("fs").promises; 

const writer = async () => {
    try {
        await writeFile('./temporary/temp.txt', "This is the First line \n", { flag: 'a' });
        await writeFile('./temporary/temp.txt', "This is the Second line \n", { flag: 'a' });
        await writeFile('./temporary/temp.txt', "This is the Third line \n", { flag: 'a' });
    } catch (error) {
        console.log("Error writing to file:", error);
    }
};


const reader = async() => {
    try{
       const temp = await readFile('./temporary/temp.txt', 'utf8')
       console.log(temp)
    }
    catch (error) {
    console.log(error)
    }
}

const readWrite = async() => {
   await writer();
   await reader();
}

readWrite();
