const Class = require('./classes/artzLogger');
const logger = new Class({
  timeStamp: moment(new Date).format('DD/MM/YYYY hh:mm:ss')
})
logger.debug('lol')
module.exports = Class;
