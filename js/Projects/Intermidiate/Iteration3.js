function fizzBuzz(max, word1, word2) {
    let write = document.getElementById("output");
    write.innerHTML = "";
    for (let i = 1; i <= max; i++) {
        if (!(i % 3) && !(i % 5)) {
            write.innerHTML += word1 + word2;
        } else if (!(i % 3)) {
            write.innerHTML += word1;
        } else if (!(i % 5)) {
            write.innerHTML += word2;
        } else {
            write.innerHTML += i;
            if (i < max) {
                write.innerHTML += ", ";
            }
        }
    }
}
function startFizzBuzz() {
    let max = parseInt(document.getElementById("maxnumber").value);
    let firstWord = document.getElementById("firstword").value;
    let secondWord = document.getElementById("secondWord").value;
    fizzBuzz(max, firstWord, secondWord);
}
document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Iteration 3</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Iteration 3</li></ol>");
document.write("<p id = 'output'></p>");
document.write("<table>");
document.write("<tr><td>Max Number: </td><td><input type = 'number' id = 'maxnumber'></td></td>");
document.write("<tr><td>First Word: </td><td><input type = 'text' id = 'firstword'></td></td>");
document.write("<tr><td>Second Word: </td><td><input type = 'text' id = 'secondWord'></td></td>");
document.write("<tr><td></td><td><button type = 'button' onclick = 'startFizzBuzz()'>FizzBuzz!</button></td></td>");
document.write("</table></div>");
