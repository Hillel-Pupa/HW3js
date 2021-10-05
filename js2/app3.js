let enterNumber = parseInt(prompt("enter your number", 0));
for (let numb = 1; numb <= 100; numb++) {
  let quad = numb * numb;
  if (quad >= enterNumber) {
    break;
  }
  document.write(numb + " ");
}
document.write("<hr>");
