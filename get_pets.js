const client = require('./client')
client.list({}, (error, pets) => {
    if (!error) {
        console.log('Fetch list pets successfully!')
        console.log(pets)
    } else {
        console.error(error)
    }
})