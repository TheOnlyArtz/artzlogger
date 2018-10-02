colors = require('colors');

const assignMethod = require('../functions/methods.js');

let streamToJSON = require('../functions/streamToJSON.js');
let streamToTXT = require('../functions/streamToTXT.js');
let stream;

class Artzlogger {
  constructor(options = {}) {
    this.options = options;


    this.path = this.options.streamLog && this.options.streamLog.path ? this.options.streamLog.path : './';

    if (!this.options.streamLog || !this.options.streamLog.enabled) {
        stream = () => {}
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
  *@param {String} input the input
  */
  error(...input) {
    assignMethod(this.getTime(), 'error', ...input, this);
    stream(this.getTime(), 'error', ...input, this.path);
  }
  /**
  *@function
  *@param {String} input the input
  */
  log(...input) {
    assignMethod(this.getTime(), 'log', ...input, this);
    stream(this.getTime(), 'log', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input the input
  */
  group(...input) {
    assignMethod(this.getTime(), 'group', ...input, this);
    stream(this.getTime(), 'group', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input the input
  */
  debug(...input) {
    assignMethod(this.getTime(), 'debug', ...input, this);
    stream(this.getTime(), 'debug', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input the input
  */
  rainbow(...input) {
    assignMethod(this.getTime(), 'rainbow', ...input, this);
    stream(this.getTime(), 'rainbow', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input the input
  */
  info(...input) {
    assignMethod(this.getTime(), 'info', ...input, this);
    stream(this.getTime(), 'info', ...input, this.path);
  }

  /**
  *@function
  *@param {String} input the input
  */
  warn(...input) {
    assignMethod(this.getTime(), 'warn', ...input, this);
    stream(this.getTime(), 'warn', ...input, this.path);
  }

  // This function will fetch the time from the user's config!
  getTime() {
    return this.options.timestamp ? this.options.timestamp() || '' : '';
  }
}



module.exports = Artzlogger;
