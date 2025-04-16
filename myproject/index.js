
const chalk = require("chalk");
const figlet = require("figlet");

figlet("I am the best", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  console.log(chalk.redBright(data));
});


