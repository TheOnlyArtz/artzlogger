# artzlogger
A simple custom logging modlie

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
### Custom streamable log driver
```js
const moment = require('moment');
const artzlogger = require('artzlogger');
const logger = new artzlogger({
  streamLog: {
    enabled: true,
    encode: 'JSON', // There's TXT too but if encode isn't set it will be TXT by default,
    path: './logs/' // Optional! Just if you want different path for the logs to be written inn
  }
});
```
### Advanced Config
##### Capitalized log method name
```js
const artzlogger = require('artzlogger');
const logger = new artzlogger({
    capitalized: true
});

logger.error('Error!!!') // -> ERROR: Error!!!
```
##### Method Name Decorators
```js
const artzlogger = require('artzlogger');
const logger = new artzlogger({
    decorators: {
        start: "⚠️",
        end: "⚠️"
    }
});

logger.error('Error!!!') // -> ⚠️error⚠️: Error!!!
```
##### Escaped Output
```js
const artzlogger = require('artzlogger');
const logger = new artzlogger({
  escapedOutput: true,
});

logger.error({s: "s"} + ' ' + 'Has failed') // -> error: [Object: object] Has failed
```
### Loggin' methods
<ul>
  <li>error</li>
  <li>debug</li>
  <li>group</li>
  <li>info</li>
  <li>log</li>
  <li>rainbow</li>
  <li>warn</li>
</ul>
