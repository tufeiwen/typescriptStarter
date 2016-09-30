
 //   console.log("Hello, typescript."); //test dev setup
import runPromise from "./promise/promiseDriver";
import printHero from "./module/moduleDriver";
import {heroDriver} from "./heroes/appDriver"
runPromise();
printHero();
heroDriver();