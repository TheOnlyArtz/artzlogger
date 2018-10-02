const fs = require('mz/fs');

function streamToTXT(timestamp, type, message, path) {
    timestampTitle = timestamp.replace(/ +|\\|\/|\:/gi, ' ');

    if (!this.timestamp) {
        this.timestamp = timestampTitle;
     }

     const title = path ? path + `[Artzlogger]${this.timestamp}.txt` : `./[Artzlogger]${this.timestamp}.txt`;
     const fileThere = fs.existsSync(title);
     if (!fileThere) {
         fs.writeFileSync(title, '');
     }
    const streamable = fs.readFileSync(title, 'utf8');

    const string = `${streamable}\r\n[${timestamp} | ${type}] ${message}`

    fs.writeFileSync(title, string);
}

module.exports = streamToTXT;
