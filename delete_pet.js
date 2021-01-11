const client = require('./client')

client.delete({ id: '1' }, (error, _) => {
    if (!error) {
        console.log('Pet has been deleted successfully!')
    } else {
    	console.log('Delete pet failed!')
        console.error(error)
    }
})