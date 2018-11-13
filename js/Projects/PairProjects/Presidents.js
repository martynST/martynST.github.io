document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Presidents</small></h1>")
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Presidents</li></ol>")
let myObject;
let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/presidents.csv";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();
request.onload = function() {
    myObject = request.response;
    parsePresidents(myObject);
}
let PresidentArrayObject = [];

function makePresident(name, birth, location, death, deathLocation) {
    let president = {
        "name": name.replace(/\s\s/g, ''),
        "dateOfBirth": birth.replace(/\s\s/g, ''),
        "locationOfBirth": location.replace(/\s\s/g, ''),
        "dateOfDeath": death.replace(/\s\s/g, ''),
        "locationOfDeath": deathLocation.replace(/\s\s/g, ''),
        "toString": function() {
            let myString = "name: " + this.name + "<br>date of birth: " + this.dateOfBirth + "<br>location of birth: " + this.locationOfBirth + "<br>date of death: " + this.dateOfDeath + "<br>location of death: " + this.locationOfDeath+"<br>"; 
            myString += "<p></p>"
            return myString;
        }
    };
    return president;
}
function howManyAlive(thisYear) {
    let count = 0;
    let birthYear;
    let deathYear;
    
    for (let i = 0; i < PresidentArrayObject.length; i++) {
        birthYear = PresidentArrayObject[i].dateOfBirth.substring(PresidentArrayObject[i].dateOfBirth.length-4);
        deathYear = PresidentArrayObject[i].dateOfDeath.substring(PresidentArrayObject[i].dateOfDeath.length-4);
        if (thisYear >= birthYear && (thisYear <= deathYear) || deathYear.isNaN) {
            count++;
        }      
    }
    return count;
}
function whoIsAlive() {
    whichYear = document.getElementById('whichYear').value;
    document.getElementById('presidentPrint').innerHTML = "";
    for (let i = 0; i < PresidentArrayObject.length; i++) {
        birthYear = PresidentArrayObject[i].dateOfBirth.substring(PresidentArrayObject[i].dateOfBirth.length-4);
        deathYear = PresidentArrayObject[i].dateOfDeath.substring(PresidentArrayObject[i].dateOfDeath.length-4);
        if (whichYear >= birthYear && ((whichYear <= deathYear) || deathYear == "" || deathYear == " ")) {
            document.getElementById('presidentPrint').innerHTML += PresidentArrayObject[i].toString();
        }      
    }
}
function mostAlive() {
    let alivePerYear = []
    for (let year = 1732; year < 2017; year++)
    {
        alivePerYear[year - 1732] = howManyAlive(year);
    }
    let mostAlive = 0;
    for (let i = 0; i < alivePerYear.length; i++) {
        if (mostAlive < alivePerYear[i])
        {
             mostAlive = alivePerYear[i];
        }
    }
        
    document.getElementById('presidentPrint').innerHTML = (alivePerYear.indexOf(mostAlive) + 1732);
}
function parsePresidents(presidentsList) {
    let presidentArray = presidentsList.split("\n");
    let presidentArray2d = []
    for (let i = 0; i < presidentArray.length; i++) {
        presidentArray2d[i] = presidentArray[i].split(",");
    }
    for (let j = 1; j < presidentArray2d.length; j++) {
        PresidentArrayObject[j-1] = makePresident(presidentArray2d[j][0],presidentArray2d[j][1],presidentArray2d[j][2],presidentArray2d[j][3],presidentArray2d[j][4]);
    }
}

document.write("<p id = 'presidentPrint'></p>");
document.write("<button type = 'button' onclick = 'mostAlive()'>Find Most Alive</button>" + "<input type = 'number' id = 'whichYear'>" + "<button type = 'button' onclick = 'whoIsAlive()'>Check Year!</button></div>");