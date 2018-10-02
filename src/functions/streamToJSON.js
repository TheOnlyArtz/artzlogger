const fs = require('mz/fs');

function streamToJSON(timestamp, type, message, path) {
    timestamp = timestamp.replace(/ +|\\|\/|\:/gi, ' ');
        
    if (!this.timestamp) {
         this.timestamp = timestamp;
     }   
    
        const title = path ? path + `[Artzlogger]${this.timestamp}.json` : `./[Artzlogger]${this.timestamp}.json`;

        const fileThere = fs.existsSync(title);
        if (!fileThere) {
             fs.writeFileSync(title, JSON.stringify({}));
        }
        
        const streamable = fs.readFileSync(title, 'utf8');
        const streamableJSON = JSON.parse(streamable);
         
        if (streamableJSON[timestamp]) {
            toKeep = streamableJSON[timestamp];
            streamableJSON[timestamp] = [toKeep]
            streamableJSON[timestamp].push({type, message, timestamp})
        }  else {
            streamableJSON[timestamp] = {
                type,
                message,
                timestamp
            }      
        }
        
        fs.writeFileSync(title, JSON.stringify(streamableJSON, null, 2));
    
}

module.exports = streamToJSON;