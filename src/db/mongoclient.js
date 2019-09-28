const mongoClient = require("mongodb").MongoClient;

let mongoHead
let realEstateCollection
const client = new mongoClient(process.env.MONGO_URI, { useNewUrlParser: true })
client.connect((e) => {
    if (e) {
        console.error('An error occurred while connecting to MongoDB', e)
    } else {
        console.log('Connected to MongoDB')
        realEstateCollection = client.db('realestategame').collection('realestatedata')
    }
})

module.exports = {
    async getDocument(id) {
        const doc = await realEstateCollection.findOne({'RecordID_Int': 1})
        console.log(doc)
        return doc
    }
}