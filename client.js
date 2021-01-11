const grpc = require('grpc')
const PROTO_PATH = './pets.proto'
const PetService = grpc.load(PROTO_PATH).PetService
const client = new PetService('localhost:50051', grpc.credentials.createInsecure())
module.exports = client