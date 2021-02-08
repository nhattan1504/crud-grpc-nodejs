const grpc = require('grpc')
const uuidv1 = require('uuidv1')
const petsProto = grpc.load('pets.proto')

const pets = [
    { id: '1', name: 'Alaska', description: 'Description 1' },
    { id: '2', name: 'Husky', description: 'Description 2' }
]

const server = new grpc.Server()

server.addService(petsProto.PetService.service, {
    list: (_, callback) => {
        callback(null, pets)
    },
    insert: (call, callback) => {
        let pet = call.request
        pet.id = uuidv1()
        pets.push(pet)
        callback(null, pet)
    },
    delete: (call, callback) => {
      let existingPetIndex = pets.findIndex(pet => pet.id === call.request.id)
      if (existingPetIndex != -1) {
      	  // Xóa object pet khỏi mảng pet
          pets.splice(existingPetIndex, 1)
          callback(null, {})
      } else {
      	  // Return error not found nếu không tồn tại pet có id tương ứng
          callback({
              code: grpc.status.NOT_FOUND,
              details: "Not found"
          })
      }
    }
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()