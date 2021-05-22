const args = process.argv.slice(2);

let alphabet = '';
for (i=65; i <= 90; i++){
  alphabet += String.fromCharCode(i);
}

function numToBase(num, base) {
  if (isNaN(num)) {
    throw new Error("Invalid input for for conversion. Not a number.");
  } else if (isNaN(base)) {
    throw new Error("Invalid base. Not a number.");
  } else if (base < 2 || base > 36) {
    throw new Error("Invalid base. Less than 2 or greater than 36.");
  } else {
    const divisor = Number(base) || 2;
    num = Number(num);
    const positive = Math.abs(num) === num;

    let converted = "";
    let dividend = positive ? num : Math.abs(num);

    while (dividend > 0) {
      remainder = String(dividend % divisor);
      process.stdout.write(`${dividend} / ${divisor} = `);

      dividend = Math.floor(dividend / divisor); // dividend = quotient
      console.log(`${dividend}`);
      console.log(`Remainder = ${remainder}`);

      if (remainder > 10) {
        let index = remainder - 10;
        converted = alphabet[index] + converted;
      } else {
        converted = remainder + converted;
      }

      console.log(`Converted = ${converted}\n`);
    }

    return positive ? converted : "- " + converted;
  }
}

const decimal = args[0];
const base = args[1];
if (args.length === 2) {
  try {
    console.log(numToBase(decimal, base));
  } catch (err) {
    console.log(err.message);
  }
} else {
  const path = __filename.split("/");
  const basename = path[path.length - 1];
  console.log(`Usage: node ${basename} <number> <base>`);
}
