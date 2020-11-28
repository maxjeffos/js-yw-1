// const fs = require("fs");
import * as fs from "fs";
// import * as im from "ind-package";
// import { getMessage } from "ind-package";
import * as ip from 'ind-package';
// import { add } from "ind-package";

// const ip = require('ind-package');

function main() {
  console.log("hello from main");

  let x1 = 5;
  let x2 = 7;
  let theSum = ip.add(x1, x2);
  console.log(`${x1} + ${x2} = ${theSum}`);
}

main();

