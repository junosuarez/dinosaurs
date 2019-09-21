// Run with node and capture output then match with existing list.

const $ = require('cheerio')
const request = require('request');

request('https://en.wikipedia.org/wiki/List_of_dinosaur_genera', function (error, response, body) {
  if (error) return console.error(error)
  const parsedHTML = $.load(body)
  parsedHTML('li').map(function(i, listItem) {
    let links = $('a', listItem);
    // Ignore nomen nudum, preoccupied and other uncertain names.
    if (links.length !== 1) return;
    console.log($(links[0]).text().toLowerCase());
  })
});
