const client = require('./client')

let newPet = {
    name: "Shiba Inu",
    description: "Description 3"
}

client.insert(newPet, (error, pet) => {
    if (!error) {
       console.log('New pet created successfully', pet)
    } else {
       console.error(error)
    }
})