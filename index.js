require('dotenv').config()
const polka = require('express')

const app = polka()

require('./src/misc/routeindexer')(app)

app.get('*', (_, res) => {
    res.status(404).send('This route does not exist.')
})

app.listen(process.env.API_LISTEN_PORT, () => {
    console.log(`API is listening on port ${process.env.API_LISTEN_PORT}`)
})