const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt',{ highWaterMark: 200 , encoding: 'utf8' })

let resultCount = 0;
stream.on('data', (result) => {
    resultCount++;
  console.log(result)
})

stream.on("end", () => {
  console.log(`Stream ended. Total resultss received: ${resultCount}`);
});

stream.on('error', (err) => console.log(err))
