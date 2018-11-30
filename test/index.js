const l = require('../index');
const moment = require('moment')
const logger = new l({
  timestamp: () => {return moment().format('DD/MM/YYYY HH:mm:ss')},
  escapedOutput: true,
  capitalize: false,
  streamLog: {
      enabled: true,
      encode: 'JSON',
      path: "./logs/",
  },
  decorators: {
      start: "[",
      end: "]"
  }
});

logger.log('Log!');
logger.error('Error!');
logger.warn('Warn!');
logger.info('Info!');
logger.rainbow('Rainbow!');
logger.debug('Debug!');
logger.tosca('Tosca!');

setTimeout(() => {
  logger.info('1 Sec later so it wont share the same timestamp.');
}, 1000)