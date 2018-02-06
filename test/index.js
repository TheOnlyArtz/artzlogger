const l = require('../index');
const moment = require('moment')
const logger = new l({
  timestamp: () => {return moment().format('DD/MM/YYYY HH:mm:ss')},
  escapedOutput: true,
  capitalize: false,
  decorators: {
      start: "[",
      end: "]"
  }
});

logger.error('Error!')