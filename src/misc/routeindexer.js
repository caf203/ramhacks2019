const fs = require('fs')
const path = require('path')

module.exports = (app) => {
  const routePath = path.resolve(__dirname, '..', 'routes/')
  const routeFiles = fs.readdirSync(routePath)
  
  routeFiles.forEach(fileName => {
    require(`${routePath}/${fileName}`)(app)
  })
}