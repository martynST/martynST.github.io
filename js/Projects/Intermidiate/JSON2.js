document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>JSON 2</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>JSON 2</li></ol>");
document.write("<p id = 'holder'></p>");
document.write("<p id = 'results'></p></div>");

let kings;
let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    kings = request.response;
    document.getElementById("holder").innerHTML = "Type in some text to search.<br>";
    document.getElementById("holder").innerHTML += "<input type=\"text\" id=\"json2Input\">";
    document.getElementById("holder").innerHTML += "<button type=\"button\" onclick=\"search()\">search</button>";
};

function printObject(myObject, count) {
    count++;
    for (let key in myObject) {
        if (myObject[key] instanceof Object) {
            for (let i = 0; i < count; i++) {
                document.getElementById("results").innerHTML += "    ";
            }
            document.getElementById("results").innerHTML += key + ":<br>";
            printObject(myObject[key], count);
        } else {
            for (let i = 0; i < count; i++) {
                document.getElementById("results").innerHTML += "    ";
            }
            document.getElementById("results").innerHTML += key + ": " + myObject[key] + "<br>";
        }
    }
}
function print(shouldPrint) {
    document.getElementById("results").innerHTML = "";
    for (let i = 0; i < kings.length; i++) {
        if (shouldPrint[i]) {
            printObject(kings[i], -1);
            document.getElementById("results").innerHTML += "<br>";
        }
    }
}

function search() {
    let needle = document.getElementById("json2Input").value;
    document.getElementById("json2Input").value = "";
    let shouldPrint = [];
    for (let i = 0; i < kings.length; i++) {
        shouldPrint[i] = 0;
        for (let key in kings[i]) {
            if (kings[i][key].includes(needle)) {
                shouldPrint[i] = 1;
                break;
            }
        }
    }
    print(shouldPrint);
}


