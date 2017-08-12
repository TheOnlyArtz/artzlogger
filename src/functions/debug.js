function debug (input) {
  if (Ooptions && Ooptions.timeStamp) {
    console.log(Ooptions.timeStamp + ' ' + 'debug'.cyan + ":", input.toString());
  } else {
    console.log('debug'.cyan + ":", input.toString());
  }
}

module.exports = debug;
