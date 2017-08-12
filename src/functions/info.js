function info(input) {
  if (Ooptions && Ooptions.timeStamp) {
    console.log(Ooptions.timeStamp + ' ' + 'info'.green + ":", input.toString());
  } else {
    console.log('info'.green + ":", input.toString());
  }
}

module.exports = info;
