const { readFileSync, writeFileSync } = require('fs')

writeFileSync(
  './temporary/fileA.txt',
  "hey this is the first line \n",
  { flag: 'a' }
)

writeFileSync(
  './temporary/fileA.txt',
  "hey this is the second line \n",
  { flag: 'a' }
)
writeFileSync(
  './temporary/fileA.txt',
  "hey this is the third line",
  { flag: 'a' }
)

const read = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(read)