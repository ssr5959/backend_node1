import {sum,PI} from "./math.js"
console.log(sum(5,4));
//type='MODULE' in the package.json which we will create in the same directory
import { generate, count } from "random-words";
//see on importing random-words (export generate,count) we cant access->because we havent written type:module in package.json the package after download
console.log(generate());//now will work since i wrote "type":"module"