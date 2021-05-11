const chalk = require("chalk")
const dateRn = `[ ${new Date().toISOString()} ]`

function Logger(name, dateOptions) {
this.dateOptions = dateOptions.toLowerCase()
this.name = name
}
// dateOptions are unsupported so far.

Logger.prototype.info = function(elem) {
    console.log(chalk.cyan(`[ ${this.name} ] - `) + chalk.blue(`${dateRn} | INFO: ${elem}`))
}

Logger.prototype.error = function (elem) {
    console.log(chalk.cyan(`[ ${this.name} ] - `) + chalk.red(`${dateRn} | ERROR: ${elem}`))
}

Logger.prototype.warn = function(elem) {
    console.log(chalk.cyan(`[ ${this.name} ] - `) + chalk.yellow(`${dateRn} | WARN: ${elem}`))
}

Logger.prototype.log = function(elem) {
    console.log(chalk.cyan(`[ ${this.name} ] - `) + chalk.greenBright(`${dateRn} | LOG: ${elem}`))
}


module.exports = Logger
