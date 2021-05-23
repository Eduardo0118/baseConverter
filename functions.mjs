let digits = '0123456789';
for (let i=65; i <= 90; i++){
  digits += String.fromCharCode(i);
}

export default function decToBase(decimal, outputBase) {
  if (isNaN(outputBase)) {
    throw new Error("Invalid base. Not a number.");
  } else if (outputBase < 2 || outputBase > 36) {
    throw new Error("Invalid base. Less than 2 or greater than 36.");
  } else {
    const positive = Math.abs(decimal) === Number(decimal);
    let dividend = positive ? decimal : Math.abs(decimal);

    const divisor = Number(outputBase);
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

// export function baseToDec(value, valueBase) {
//   // const possibleDigits = digits.slice(0, valueBase);
//   // dividend = dividend.trim();
//   const positive = decimal[0] === "-" ? :  === Number(decimal);
//   let dividend = positive ? decimal : Math.abs(decimal);
//   // for (let digit of dividend) {
//     //   if (!(possibleDigits.includes(digit))) {
//     //     throw new Error(`Invalid value ${value} for base ${valueBase}.`);
//     //   }
//     // }
// }
