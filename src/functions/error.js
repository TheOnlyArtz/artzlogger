  function error (input) {
    if (Ooptions && Ooptions.timeStamp) {
      console.log(Ooptions.timeStamp + ' ' + chalk.red('error') + ":", input.toString());
    } else {
      console.log(chalk.red('error') + ":", input.toString());
    }
  }

module.exports = error;
