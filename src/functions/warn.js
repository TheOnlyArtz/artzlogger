module.exports = warn;

function warn(func, input) {
    console.log(func + ' ' + 'warning'.yellow + ":", input.toString());
}
