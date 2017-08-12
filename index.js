const Class = require('./classes/artzLogger');
const logger = new Class({
  timeStamp: moment(new Date).format('DD/MM/YYYY')
})
logger.error('lol')
module.exports = Class;
