const getDocument = require('../db/mongoclient').getDocument

module.exports = (app) => {
    app.get('/gethouses', (req, res) => {
        console.log(req.headers)
        getDocument(1).then(console.log)
        res.status(200).send({'hello': 'world'})
    })
}