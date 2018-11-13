document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Doggo</small></h1>")
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Doggo</li></ol>")
function printOthers() {
    let placeOfDoggo = document.getElementById("doggoPlace").value;
    for (let i = 1; i <= 100; i++) {
        if (i != placeOfDoggo) {
            document.getElementById("results").innerHTML += printPlace(i.toString());
            if (i != 100) {
                document.getElementById("results").innerHTML += ", ";
            }
            if (!(i % 10)) {
                document.getElementById("results").innerHTML += "<br>";
            }
        }
    }
}
function printPlace(position) {
    let lastDigit = position.charAt(position.length - 1);
    if (position === "11" || position === "12" || position === "13") {
        return position + "th";
    } else if (lastDigit === "1") {
        return position + "st";
    } else if (lastDigit === "2") {
        return position + "nd";
    } else if (lastDigit === "3") {
        return position + "rd";
    } else {
        return position + "th";
    }
}
//check if between 1 and 100 inclusive                          
function validPosition() {

}
document.write("<p id = 'results'></p>");
document.write("<input type = 'number' id = 'doggoPlace'>" + "<button type = 'button' onclick = 'printOthers()'>click here</button></div>");