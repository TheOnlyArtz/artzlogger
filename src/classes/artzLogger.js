chalk = require('chalk');
colors = require('colors');
const error   = require('../functions/error.js'),
      log     = require('../functions/log.js'),
      debug   = require('../functions/debug.js'),
      group   = require('../functions/group.js'),
      rainbow = require('../functions/rainbow.js'),
      info    = require('../functions/info.js'),
      warn    = require('../functions/warn.js');

let streamToJSON = require('../functions/streamToJSON.js');
let streamToTXT = require('../functions/streamToTXT.js');
let stream;

class Artzlogger {
  constructor(options = {}) {
    this.options = options;
     
    
    this.path = this.options.streamLog && this.options.streamLog.path ? this.options.streamLog.path : './';  
    
    if (!this.options.streamLog || !this.options.streamLog.enabled) {
        streamToJSON = function() {};
        streamToTXT = function() {};
    }
      
    if (this.options.streamLog && !this.options.streamLog.encode) stream = streamToTXT;
    if (this.options.streamLog && this.options.streamLog.encode === 'JSON' && streamToJSON) {
        stream = streamToJSON;
    }
      
    if (this.options.streamLog && this.options.streamLog.encode === 'TXT' && streamToTXT) {
        stream = streamToTXT;   
    }
    
  }
    
  
  /**
  *@function
  *@param {String} input
  */
  error(...input) {
    error(this.getTime(), ...input);
    stream(this.getTime(), 'error', ...input, this.path);
  }
  /**
  *@function
  *@param {String} input
  */
  log(...input) {
    log(this.getTime(), ...input);
    stream(this.getTime(), 'log', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input
  */
  group(...input) {
    group(this.getTime(), ...input);
    stream(this.getTime(), 'group', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input
  */
  debug(...input) {
    debug(this.getTime(), ...input);
    stream(this.getTime(), 'debug', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input
  */
  rainbow(...input) {
    rainbow(this.getTime(), ...input);
    stream(this.getTime(), 'rainbow', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input
  */
  info(...input) {
    info(this.getTime(), ...input);
    stream(this.getTime(), 'info', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input
  */
  warn(...input) {
    warn(this.getTime(), ...input);
    stream(this.getTime(), 'warn', ...input, this.path);
  }

  getTime() {
    return this.options.timestamp ? this.options.timestamp() || '' : '';
  }
}



module.exports = Artzlogger;
