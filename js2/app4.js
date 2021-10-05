let enterNumb = parseInt(prompt("enter your number", 0));
let isSimple = true;
for (let divider = 2; divider <= enterNumb / 2; divider++) {
  if (enterNumb % divider === 0) {
    isSimple = false;
    break;
  }
}
document.write("number is simple " + isSimple + "<hr>");
