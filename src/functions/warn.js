module.exports = warn;

function warn(input) {
  console.log('warning'.underline.yellow + ":", input.toString());
}
