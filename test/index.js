const l = require('../index');
const moment = require('moment')
const logger = new l({
  timestamp: () => {return moment().format('DD/MM/YYYY HH:mm:ss')},
  streamLog: {
    enabled: true,
    encode: 'JSON',
    path: './logs/'
  },
});

logger.info('Hello');
logger.error('Error happened.')