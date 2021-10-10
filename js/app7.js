let multi = 0;
for (let number = 30; number <= 80; number += 1) {
  if (number % 2 === 0) {
    multi += number;
  }
}
document.write(multi + "<hr>");
