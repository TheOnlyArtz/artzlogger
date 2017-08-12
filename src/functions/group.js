 function group (input) {
   if (Ooptions && Ooptions.timeStamp) {
     console.log(Ooptions.timeStamp + ' ' + chalk.blue('group') + ":", input.toString());
   } else {
     console.log(chalk.blue('group') + ":", input.toString());
   }
}

module.exports = group;
