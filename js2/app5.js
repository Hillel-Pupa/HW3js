{
  let enterNumber = parseInt(prompt("enter your number", 0));
  let powResult = null;
  for (let pow = 1; 3 ** pow <= enterNumber; pow++) {
    if (3 ** pow === enterNumber) {
      powResult = pow;
    }
  }
  if (powResult) {
    document.write("3^" + powResult + " is " + enterNumber);
  } else {
    document.write("pow not found for " + enterNumber);
  }
}
document.write("<hr>");
