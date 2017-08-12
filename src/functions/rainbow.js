function rainbow (input) {
  if (Ooptions && Ooptions.timeStamp) {
    console.log(Ooptions.timeStamp + ' ' + 'rainbow'.yellow + ":", input.toString().rainbow);
  } else {
    console.log('rainbow'.yellow + ":", input.toString().rainbow);
  }
}

module.exports = rainbow;
