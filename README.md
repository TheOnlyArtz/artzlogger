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
