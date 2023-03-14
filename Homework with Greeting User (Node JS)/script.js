const EventEmitter = require('events')

class FirstEmitter extends EventEmitter {}

const emitter = new FirstEmitter();

emitter.on('registeredStudent', (name) => {
    console.log(`Hi ${name}, welcome to our app!`)
})

emitter.emit('registeredStudent', `Damjan`)