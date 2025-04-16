//step 1
// for(let i=0;i<5;i++)
//     console.log(i);
// console.log("bye node");
//2 understanding process.argv

//3 understand process.argv->process.argv will contain the input to script.js process tells about what is being currently run

// let args=process.argv;
// for(let i=2;i<args.length;i++)
// {
//     console.log(args[i]+`Number ${i-1}th pos`);
// }

//using require(4)
// let result=require('./math');//module.exports is an object which is initialised to another object and returns an empty object if we try to require
// // a file which does not have module.exports
// result.sum(5,3);
// result.mul(5,3);

//task 5->accepting the object from a directory->directory's result will be returned from index.js in fruits directory
// let fruits=require('./fruits');
// console.log(fruits);

//task 6->trying to use figlet which exists in other directory
const chalk=require("chalk");
const figlet = require("figlet");
figlet("I am the best", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  console.log(chalk.blue(data));
 
});
