# artzlogger
A simple custom logging module

### Custom timestamp driver
```js
const artzlogger = require('artzlogger');
const logger = new artzlogger({
  timestamp: () => {return Date.now()}
})
```
#### Using moment for timestamp driver
```js
const moment = require('moment');
const artzlogger = require('artzlogger');
const logger = new artzlogger({
  timestamp: () => {return moment().format('DD/MM/YYYY HH:mm:ss')}
});
```
