function log (input) {
  if (Ooptions && Ooptions.timeStamp) {
    console.log(Ooptions.timeStamp + ' ' + 'log'.gray + ":", input.toString());
  } else {
    console.log('log'.gray + ":", input.toString());
  }
}

module.exports = log;
