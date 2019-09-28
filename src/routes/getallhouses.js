const getAllDocuments = require('../db/mongoclient').getAllDocuments

module.exports = (app) => {
    app.get('/getallhouses', async (req, res) => {
        console.log(req.headers)
        const documents = await getAllDocuments()
        console.log(documents)
        res.status(200).send(documents)
    })
}


/*
name
address (street name)
square footage

*/