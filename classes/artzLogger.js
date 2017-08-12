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
  constructor(options) {
    this.options = options;
    if (options && this.options.timeStamp) {
      console.log('Timestamp valid');
      let inside;
      this.input = this.options.timeStamp + inside;
    }
  }

  /**
  *@function
  *@param {String} input
  */
  error(input) {
    error(this.options.timeStamp + ` ${input}`)
  }
  /**
  *@function
  *@param {String} input
  */
   log (input) {
    log(input)
  }

  /**
  *@function
  *@param {String} input
  */
   group(input) {
     group(input);
  }

  /**
  *@function
  *@param {String} input
  */
   debug(input) {
     debug(input);
  }

  /**
  *@function
  *@param {String} input
  */
   rainbow(input) {
     rainbow(input);
  }

  /**
  *@function
  *@param {String} input
  */
   info(input) {
     info(input);
  }

  /**
  *@function
  *@param {String} input
  */
   warn(input) {
     warn(input);
  }

}

module.exports = Artzlogger;
