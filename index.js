require('dotenv').config()
const polka = require('express')

const app = polka()

require('./src/misc/routeindexer')(app)

app.listen(process.env.API_LISTEN_PORT, () => {
    console.log(`API is listening on port ${process.env.API_LISTEN_PORT}`)
})