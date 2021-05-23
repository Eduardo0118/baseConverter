import decToBase from "./functions.mjs";

const args = process.argv.slice(2);
const [number, base] = args.slice(0, 2);

if (args.length === 2) {
  try {
    console.log(decToBase(number, base));
  } catch (err) {
    console.log(err.message);
  }
} else {
  const pathParts = process.cwd().split("/");
  // fs.realpathSync('.') // process.env.PWD
  const baseName = pathParts[pathParts.length - 1];
  console.log(`Usage: node ${baseName} <number> <base>`);
}
