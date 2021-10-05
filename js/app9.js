let enterNumb = parseInt(prompt("enter your number", 0));
let dividerCount = 0;
let dividerSum = 0;
document.write("dividers are ");
for (let divider = 1; divider <= enterNumb / 2; divider++) {
  if (enterNumb % divider === 0) {
    if (divider === enterNumb / 2) {
      document.write(divider);
    } else {
      document.write(divider + ", ");
    }
    if (divider % 2 === 0) {
      dividerCount++;
      dividerSum = dividerSum + divider;
    }
  }
}
document.write(
  "<p> count of even divider is " +
    dividerCount +
    "</p>" +
    "<p> sum of divider is " +
    dividerSum +
    "</p>"
);
