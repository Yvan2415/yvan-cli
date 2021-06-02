const chalk = require('chalk');

module.exports = {
  error: function(error){
    console.log(chalk.red(error));
  },
  success: function(message){
    console.log(chalk.green(message));
  },
  warn: function(warning){
    console.log(chalk.yellow(warning));
  },
  info: function(info){
    console.log(chalk.blue(info));
  }
}