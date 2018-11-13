function string4(myString = "") {
    let count = 0;
    for (let i = 0; i < myString.length - 2; i++) {
        if (myString[i] === myString[i + 1] && myString[i] === myString[i + 2]) {
            count++;
        }
    }
    document.getElementById("output").innerHTML = `The number of triples was ${count}`;
}
function startString4() {
    let myText = document.getElementById("myText").value;
    string4(myText);
}
document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Strings 4</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Strings 4</li></ol>");
document.write("Input Text: <input type = 'text' id = 'myText'><button type = 'button' onclick = 'startString4()'>Start Search</button>");
document.write("<p id = 'output'></p>");