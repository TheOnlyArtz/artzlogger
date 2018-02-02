 chalk = require('chalk')
 colors = require('colors');
 moment = require('moment')
const error   = require('../functions/error.js'),
      log     = require('../functions/log.js'),
      debug   = require('../functions/debug.js'),
      group   = require('../functions/group.js'),
      rainbow = require('../functions/rainbow.js'),
      info    = require('../functions/info.js'),
      warn    = require('../functions/warn.js')

class Artzlogger {
  constructor(options = {}) {
    this.options = options;
  }
  /**
  *@function
  *@param {String} input
  */
  error(...input) {
    error(this.getTime(), ...input)
  }
  /**
  *@function
  *@param {String} input
  */
  log(...input) {
    log(this.getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  group(...input) {
    group(this.getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  debug(...input) {
    debug(this.getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  rainbow(...input) {
    rainbow(this.getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  info(...input) {
    info(this.getTime(), ...input)
  }

  /**
  *@function
  *@param {String} input
  */
  warn(...input) {
    warn(this.getTime(), ...input)
  }

  getTime() {
    return this.options.timestamp ? this.options.timestamp() || '' : '';
  }
}



module.exports = Artzlogger;
