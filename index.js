var fs = require('fs')

module.exports = fs.readFileSync('./dinosaurs.csv', 'utf-8').split('\n').filter(Boolean)
