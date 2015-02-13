var fs = require('fs')
var path = require('path')

module.exports = fs.readFileSync(path.join(__dirname, 'dinosaurs.csv'), 'utf-8').split('\n').filter(Boolean)
