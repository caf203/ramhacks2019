const csv = require('csv-parser')
const fs = require('fs')
const sa = require('superagent')

let allAddrs = []
let converted = []
let i = 0

fs.createReadStream('housing.csv')
  .pipe(csv())
  .on('data', (row) => {
    allAddrs.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
setInterval(async () => {
    const lat = allAddrs[i].latitude
    const lng = allAddrs[i].longitude
    const body = await sa.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=yourkey`)
    console.log('Item ' + i + ': ' + body.body.results[0].address_components[1].short_name)
    converted.push(Object.assign({streetNumber: body.body.results[0].address_components[0].short_name, streetName: body.body.results[0].address_components[1].short_name}, allAddrs[i]))
    if (i >= 3000) {
        console.log('AT 3000, DONE')
        fs.writeFileSync('./convertedaddrs.json', JSON.stringify(converted))
        process.exit()
    }
    i++
}, 100)

  });


