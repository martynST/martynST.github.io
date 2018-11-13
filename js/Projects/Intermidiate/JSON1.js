document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>JSON 1</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>JSON 1</li></ol>");
document.write("<button type = 'button' onclick = 'grabFile()'>Get Super Hero List</button>");
document.write("<p id = \"jsonTest1\"></p></div>");


function printSuperHeroStuff(myHeroObject, count) {
    count++;
    for (let key in myHeroObject) {
        if (myHeroObject[key] instanceof Object) {
            for (let i = 0; i < count; i++)
                document.getElementById("jsonTest1").innerHTML += "    ";
            document.getElementById("jsonTest1").innerHTML += key + ":<br>";
            printSuperHeroStuff(myHeroObject[key], count);
        } else {
            for (let i = 0; i < count; i++)
                document.getElementById("jsonTest1").innerHTML += "    ";
            document.getElementById("jsonTest1").innerHTML += key + ": " + myHeroObject[key] + "<br>";
        }
    }
}
function grabFile() {
    let myObject;
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        myObject = request.response;
        printSuperHeroStuff(myObject, -1);
        document.getElementById("jsonTest1").innerHTML = "<pre>" + document.getElementById("jsonTest1").innerHTML + "</pre>";
    };
}