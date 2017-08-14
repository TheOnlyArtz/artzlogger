  function error (func, input) {
      console.log(func + ' ' + chalk.red('error') + ":", input.toString());
  }

module.exports = error;
