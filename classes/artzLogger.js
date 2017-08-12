 chalk = require('chalk')
 colors = require('colors');
const error   = require('../src/functions/error.js'),
      log     = require('../src/functions/log.js'),
      debug   = require('../src/functions/debug.js'),
      group   = require('../src/functions/group.js'),
      rainbow = require('../src/functions/rainbow.js'),
      info    = require('../src/functions/info.js')

class Artzlogger {
  constructor() {
  }

  /**
  *@function
  *@param {String} input
  */
  error(input) {
    error(input)
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

}

module.exports = Artzlogger;
