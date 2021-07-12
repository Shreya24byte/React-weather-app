export function tempConversion(val) {
    let fTemp = val;
    let celsius = (fTemp - 32) * 5 / 9;
      return celsius.toFixed(1);
  } 