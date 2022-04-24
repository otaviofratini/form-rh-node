const { MongoClient } = require('mongodb')
const uri = "mongodb://localhost:27017/dbRH"
const client = new MongoClient(uri)

async function run() {
    try{
        await client.connect()
        console.log("Conectou no banco com sucesso")
    } catch (error) {
        console.log(error)
    }
}
run()
module.exports = client