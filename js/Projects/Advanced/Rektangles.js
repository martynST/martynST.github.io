document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Rektangle</small></h1>")
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Rektangle</li></ol>")
document.write("<p id = 'shapeGoHere'></p>");
document.write("<table><tr><td>Word: </td><td><input type = 'text' id = 'wordGoHere'></td></tr><tr><td>Width: </td><td><input type = 'number' id = 'widthGoGere'></td></tr><tr><td>Length: </td><td><input type = 'number' id = 'lengthGohere'></td></tr><tr><td><select id = 'whichShape'><option>Rektangle</option></select></td><td><button type = 'button' onclick = 'makeShape()'>Make Shape</button></td></tr></table></div>");

function makeRektangle(word, width, length) {
    let currentSection = 0;
    let rektangle = "<pre>";
    for (let i = 0; i < length; i++) {
        currentSection++;
        rektangle += makeHorizontalSection(word, width, currentSection);
        rektangle += "<br>"
        rektangle += makeVerticalSection(word, width, length, currentSection);
    }
    currentSection++;
    rektangle += makeHorizontalSection(word, width, currentSection);
    rektangle += "</pre>"
    document.getElementById('shapeGoHere').innerHTML = rektangle;
}

function makeHorizontalSection(word, width, currentSection) {

    line = word[(word.length - 1) * (width%2 + currentSection%2)] + " "; 
    for (let i = 0; i < width; i++) {
        if (width%2 + currentSection%2 === (i % 2)) {                
            line += word.split("").slice(1).join(" ") + " ";
        } else {    
            line += word.split("").reverse().slice(1).join(" ") + " ";
        }
    }
    return line;
}
function makeVerticalSection(word, width, length, currentSection) {
    let line = "";
    for (let i = 1; i < word.length - 1; i++) {//number of lines
        for (let j = 0; j < width + 1; j++) {//which copy of the words
            if ((width%2) + (currentSection%2) === j % 2) {
                line += word[i] + " ".repeat(word.length+1);
            } else {
                line += word[word.length - i - 1] + " ".repeat(word.length+1);
            }
        }
        line += "\n";
    }    
    return line;
}
function makeShape() {
    let word = document.getElementById('wordGoHere').value;
    let width = parseInt(document.getElementById('widthGoGere').value);
    let length = parseInt(document.getElementById('lengthGohere').value);
    let shape = document.getElementById('whichShape').value;
    if (shape == "Rektangle") {
        makeRektangle(word, width, length);
    } else {
        makeHollowDiamond(word, width, length);
    }
}