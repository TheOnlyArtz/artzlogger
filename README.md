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
### Loggin' methods
<li>
  <ul>error</ul>
  <ul>debug</ul>
  <ul>group</ul>
  <ul>info</ul>
  <ul>log</ul>
  <ul>rainbow</ul>
  <ul>warn</ul>
</li>
