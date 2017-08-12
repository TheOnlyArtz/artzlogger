module.exports = warn;

function warn(input) {
  if (Ooptions && Ooptions.timeStamp) {
    console.log(Ooptions.timeStamp + ' ' + 'warning'.yellow + ":", input.toString());
  } else {
    console.log('warning'.yellow + ":", input.toString());
  }
}
