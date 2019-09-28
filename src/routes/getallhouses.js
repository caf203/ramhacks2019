const getAllDocuments = require('../db/mongoclient').getAllDocuments

module.exports = (app) => {
    app.get('/api/getallhouses', async (req, res) => {
        const documents = await getAllDocuments()
        res.status(200).send(documents)
    })
}