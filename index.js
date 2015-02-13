var fs = require('fs')

module.exports = fs.readFileSync('./dinosaurs.csv').split('\n')
