const getAllDocuments = require('../db/mongoclient').getAllDocuments

module.exports = (app) => {
    app.get('/getallhouses', async (req, res) => {
        console.log(req.headers)
        const documents = await getAllDocuments()
        res.status(200).send(documents)
    })
}