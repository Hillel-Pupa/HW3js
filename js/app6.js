{
  let lastDigit = 0;
  for (let number = 1; number <= 500; number++) {
    lastDigit = lastDigit + number;
  }
  document.write(lastDigit / 500 + "<br> <hr>");
}
