 chalk = require('chalk')
 colors = require('colors');
 moment = require('moment')
const error   = require('../src/functions/error.js'),
      log     = require('../src/functions/log.js'),
      debug   = require('../src/functions/debug.js'),
      group   = require('../src/functions/group.js'),
      rainbow = require('../src/functions/rainbow.js'),
      info    = require('../src/functions/info.js'),
      warn    = require('../src/functions/warn.js')

class Artzlogger {
  constructor(timestamp) {
    this.options = timestamp
  }
  /**
  *@function
  *@param {String} input
  */
  error(...input) {
    error(getTime(), ...input)
  }
  /**
  *@function
  *@param {String} input
  */
  log(...input) {
    log(getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  group(...input) {
    group(getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  debug(...input) {
    debug(getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  rainbow(...input) {
    rainbow(getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  info(...input) {
    info(getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  warn(...input) {
    warn(getTime(), ...input)
  }

}

function getTime() {
  return(moment(new Date).format('hh:mm:ss a'))
}
module.exports = Artzlogger;
