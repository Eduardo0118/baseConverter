const args = process.argv.slice(2);

let digits = '0123456789';
for (i=65; i <= 90; i++){
  digits += String.fromCharCode(i);
}

function valueToBase(value, valueBase, base) {
  if (isNaN(base)) {
    throw new Error("Invalid base. Not a number.");
  } else if (valueBase < 2 || valueBase > 36 || base < 2 || base > 36) {
    throw new Error("Invalid base. Less than 2 or greater than 36.");
  } else {
    const possibleDigits = digits.slice(0, valueBase);
    let decimalDigits = '';
    const positive = value[0] === '-';
    let dividend = positive ? value : value.slice(1);
    dividend = dividend.trim();

    for (let digit of dividend) {
      if (!(possibleDigits.includes(digit))) {
        throw new Error(`Invalid value ${value} for base ${valueBase}.`);
      }
    }

    const divisor = Number(base);
    // value = Number(value);
    // const positive = Math.abs(value) === value;

    let converted = "";
    // let dividend = positive ? value : Math.abs(value);

    while (dividend > 0) {
      remainder = Number(dividend % divisor);
      process.stdout.write(`${dividend} / ${divisor} = `);

      dividend = Math.floor(dividend / divisor); // dividend = quotient
      console.log(`${dividend}`);
      console.log(`Remainder = ${remainder}`);

      converted = digits[remainder] + converted;

      console.log(`Converted = ${converted}\n`);
    }

    return positive ? converted : "- " + converted;
  }
}

const value = args[0];
const valueBase = args[1];
const base = args[2];

if (args.length === 3) {
  try {
    console.log(valueToBase(value, valueBase, base));
  } catch (err) {
    console.log(err.message);
  }
} else {
  const path = __filename.split("/");
  const baseName = path[path.length - 1];
  console.log(`Usage: node ${baseName} <number> <number_base> <base>`);
}
