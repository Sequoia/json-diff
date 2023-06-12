
const { colorize, colorizeToCallback } = require('./colorize')
const diff = require('./core')

function diffString (obj1, obj2, options = {}) {
  return colorize(diff(obj1, obj2, options), options)
}

module.exports = { diff, diffString, colorize, colorizeToCallback }
