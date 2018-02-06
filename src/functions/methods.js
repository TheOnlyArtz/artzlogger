function log(getTimestamp, method, input, logger) {
    
    let header = logger.options.capitalize ? method.toUpperCase() : method
    input = logger.options.escapedOutput ? input.toString() : input;
    
    let decorators = logger.options.decorators;
    if (decorators) {
        if (decorators.start) {
            header = decorators.start + header;
        }
        
        if (decorators.end) {
            header += decorators.end
        }
    }
    
    let getLogString = (color) => {
        return `${getTimestamp} ${header[color]}: ${input}`    
    } 
    
    switch(method) {
        case "debug":
            console.log(getLogString('cyan'));
            break;
        case "error":
            console.log(getLogString('red'));
            break;
        case "group":
            console.log(getLogString('magenta'));
            break;
        case "info":
            console.log(getLogString('green'));
            break;
        case "rainbow":
            console.log(getLogString('rainbow'));
            break;
        case "warn":
            console.log(getLogString('yellow'));
            break;
    }
           
}

module.exports = log;