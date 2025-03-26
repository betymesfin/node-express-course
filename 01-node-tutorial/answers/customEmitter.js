const EventEmitter = require('events')

const customEmitter = new EventEmitter()
customEmitter.on('response', (name, age) => {
  console.log(`data recieved user ${name} age:${age}`)
})

customEmitter.on('response', () => {
  console.log("data recieved with no arguments ")
})

customEmitter.emit('response', 'john', 34,"abc@gmail.com")