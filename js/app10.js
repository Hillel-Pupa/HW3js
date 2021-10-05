for (let col = 1; col <= 10; col++) {
  document.write("<div class='col'>");
  for (let row = 1; row <= 10; row++) {
    let d = row * col;
    document.write("<p>" + row + " * " + col + " = " + d + "</p>");
  }
  document.write("</div>");
}
