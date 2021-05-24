import {valueToBase } from "./functions.mjs";

const args = process.argv.slice(2);
const [value, inputBase, outputBase] = args.slice(0, 3);

if (args.length === 3) {
  try {
    console.log(valueToBase(value, inputBase, outputBase));
  } catch (err) {
    console.log(err.message);
  }
} else {
  const pathParts = process.cwd().split("/"); // fs.realpathSync('.') // process.env.PWD
  const baseName = pathParts[pathParts.length - 1];
  console.log(`Usage: node ${baseName} <value> <value base> <convert base>`);
}
