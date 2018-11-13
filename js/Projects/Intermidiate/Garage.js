document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Garage</small></h1>");
document.write("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li><li class=\"breadcrumb-item\"><a href=\"Projects.html\">Projects</a></li><li class=\"breadcrumb-item active\">Garage</li></ol>");
//to write things to
document.write("<div id =\"displayContainer\"><div id = \"display\"></div></div>");
document.write("<hr>");
document.write("<div id = \"botlane\"><div id = \"textBoxOverflowContainer\"><div id = \"textBoxOverflow\"><p id = \"textBoxes\"></p></div></div>");
document.write("<p id = \"displayButtons\"></p>");
document.write("<p id = \"status\"></p></div></div>");
//Making Objects
function makeGarage() {
    let myGarage = {
        "cars": []
    }
    return myGarage;
}
function makeCar(make, model, year, faults) {
    let myCar = {
        "id": carId++,
        "make": make,
        "model": model,
        "year": year,
        "faults": faults,
        "cost": 0
    }
    myCar.cost = calculateCost(myCar);
    return myCar;
}
function calculateCost(myCar) {
    return Math.min(Math.floor((49900 * Math.exp(-0.1 * (2017 - myCar.year) - 0.2 * (myCar.faults.length)) + 100) * 100) / 100, 50000);
}

//Functionality
function addCarCommand(make, model, year, faults) {
    let myCar = makeCar(make, model, year, faults);
    myGarage.cars.push(myCar);
    document.getElementById("status").innerHTML = "Car added!";
    displayGarage();
}
function addCar() {
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let faults = [];
    for (let i = 0; i < document.getElementById("addCarTable").rows.length - 3; i++) {
        faults[i] = document.getElementById("fault" + (i + 1)).value;
    }
    addCarCommand(make, model, year, faults);
    defaultButtonDisplay();
}
function addFault() {
    let table = document.getElementById("addCarTable");
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "Fault " + (table.rows.length - 3) + ":";
    cell2.innerHTML = "<input type = \"text\" id = \"fault" + (table.rows.length - 3) + "\")>";

    var element = document.getElementById("textBoxOverflow");
    element.scrollTop = element.scrollHeight;

}
function removeCarCommand(myCarId) {
    for (let i = 0; i < myGarage.cars.length; i++) {
        if (myGarage.cars[i].id == myCarId) {
            myGarage.cars.splice(i, 1);
            break;
        }
    }
    document.getElementById("status").innerHTML = "Car removed!";
    displayGarage();
}
function removeCar() {
    let myCarId = document.getElementById("carIdNum").value;
    removeCarCommand(myCarId);
    defaultButtonDisplay();
}
//display things
function displayGarage() {
    let myTable;
    myTable = "<table  id = \"garageDisplayTable\"><tr><th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Faults</th><th>Cost</th></tr>";

    for (let i = 0; i < myGarage.cars.length; i++) {
        myTable += "<tr><td>" + myGarage.cars[i].id + "</td><td>" + myGarage.cars[i].make + "</td><td>" + myGarage.cars[i].model + "</td><td>" + myGarage.cars[i].year + "</td><td>";
        for (let j = 0; j < myGarage.cars[i].faults.length; j++) {
            myTable += "<p id=\"displayfauls\">" + myGarage.cars[i].faults[j] + "</p>";
        }
        myTable += "</td><td>" + myGarage.cars[i].cost + "</td></tr>";
    }
    myTable += "</table>";
    document.getElementById("display").innerHTML = myTable;

    let element = document.getElementById("display");
    element.scrollTop = element.scrollHeight;

}

function defaultButtonDisplay() {
    document.getElementById("textBoxes").innerHTML = "";
    document.getElementById("displayButtons").innerHTML = "<button type = \"button\" onclick = \"displayAddCar()\">Add Car</button>";
    document.getElementById("displayButtons").innerHTML += "<button type = \"button\" onclick = \"displayRemoveCar()\">Remove Car</button>";
    document.getElementById("displayButtons").innerHTML += "<button type = \"button\" onclick = \"displayAdminInterface()\">Admin Interface</button>";
    displayGarage();
}
function displayAdminInterface() {
    document.getElementById("textBoxes").innerHTML = "<input type = \"text\" size = \"50\" id = \"adminInterfaceInput\">";
    document.getElementById("displayButtons").innerHTML = "<button type = \"button\" onclick = \"adminInterface()\">enter</button>" + "<button type = \"button\" onclick = \"defaultButtonDisplay()\">Cancel</button>";
    document.getElementById("status").innerHTML = "Type addcar to add a car or remove car to remove a car. To enter fields type the field name, then it\"s value in quotations seperating faults with a commar, e.g.addcar make \"my car make\" model \"my car model\" year \"2017\" faults \"fault 1, fault 2, fault 3\".";
}
function displayRemoveCar() {
    displayGarage();
    document.getElementById("textBoxes").innerHTML = "Enter ID of car to be removed: " + "<input type = \"number\" id = \"carIdNum\">";
    document.getElementById("displayButtons").innerHTML = "<button type = \"button\" onclick = \"removeCar()\">Remove Car</button>" + "<button type = \"button\" onclick = \"defaultButtonDisplay()\">Cancel</button>";
    document.getElementById("status").innerHTML = "";
}
function displayAddCar() {
    document.getElementById("textBoxes").innerHTML = "<table id = \"addCarTable\"><tr><td>Manufacturer: </td><td><input type = \"text\" id = \"make\"></td></tr>" + "<tr><td>Model: </td><td><input type = \"text\" id = \"model\"></td></tr>" +
        "<tr><td>Year: </td><td><input type = \"number\" id = \"year\"></td></tr></table>";
    document.getElementById("displayButtons").innerHTML = "<button type = \"button\" onclick = \"addCar()\">Add Car</button>" +
        "<button type = \"button\" onclick = \"addFault()\">Add Fault</button>" +
            "<button type = \"button\" onclick = \"defaultButtonDisplay()\">Cancel</button>";
    document.getElementById("status").innerHTML = "";
}

//admin interface
function runCommand(inputArray) {
    let myMake = "";
    let myModel = "";
    let myYear = "";
    let myId = 0;
    let myFaults = [];
    //should add check that next array element contains ""
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].toLowerCase() === "make") {
            if (inputArray[i + 1].indexOf("\"") === 0 && inputArray[i + 1].indexOf("\"", 1) === inputArray[i + 1].length - 1) {
                myMake = inputArray[i + 1].substring(1, inputArray[i + 1].length - 1);
            }
        }
        if (inputArray[i].toLowerCase() === "model") {
            if (inputArray[i + 1].indexOf("\"") === 0 && inputArray[i + 1].indexOf("\"", 1) === inputArray[i + 1].length - 1) {
                myModel = inputArray[i + 1].substring(1, inputArray[i + 1].length - 1);
            }
        }
        if (inputArray[i].toLowerCase() === "year") {
            if (inputArray[i + 1].indexOf("\"") === 0 && inputArray[i + 1].indexOf("\"", 1) === inputArray[i + 1].length - 1) {
                myYear = inputArray[i + 1].substring(1, inputArray[i + 1].length - 1);
            }
        }
        if (inputArray[i].toLowerCase() === "faults") {
            if (inputArray[i + 1].indexOf("\"") === 0 && inputArray[i + 1].indexOf("\"", 1) === inputArray[i + 1].length - 1) {
                myFaults = inputArray[i + 1].substring(1, inputArray[i + 1].length - 1).split(",");
            }
        }
        if (inputArray[i].toLowerCase() === "id") {
            if (inputArray[i + 1].indexOf("\"") === 0 && inputArray[i + 1].indexOf("\"", 1) === inputArray[i + 1].length - 1) {
                myId = inputArray[i + 1].substring(1, inputArray[i + 1].length - 1);
            }
        }
    }
    if (inputArray[0].toLowerCase() == "addcar") {
        addCarCommand(myMake, myModel, myYear, myFaults);
    } else if (inputArray[0].toLowerCase() == "removecar") {
        removeCarCommand(myId);
    }
    document.getElementById("adminInterfaceInput").value = "";
}
function adminInterface() {
    //remove non single spaces
    //addCar make "make   1" model "model1" year "2017" 
    let input = document.getElementById("adminInterfaceInput").value.replace(/\s\s\s/g, " ");
    input = input.replace(/\s\s/g, " ");
    //addCar make "test" model ""
    let inputArray = [];
    while (input.length > 0) {
        if (input.indexOf(" ") == -1 && input.indexOf("\"") == -1) {
            inputArray.push(input);
            input = "";
        } else if ((input.indexOf(" ") < input.indexOf("\"") || input.indexOf("\"") == -1) && input.indexOf(" ") !== -1) {
            inputArray.push(input.substring(0, input.indexOf(" ")));
            input = input.substring(input.indexOf(" ") + 1);
        } else {
            inputArray.push(input.substring(input.indexOf("\""), input.indexOf("\"", 1) + 1));
            input = input.substring(input.indexOf("\"", 1) + 2);
        }
    }
    runCommand(inputArray);
}




let carId = 0;
let myGarage = makeGarage();
defaultButtonDisplay();




//"Manufacturer: <input type = "text" id = "make">"
//"<button type = "button" onclick = "displayAddCar()">Add Car</button>"
//let make = document.getElementById(make).value;
//"Make: " + myGarage[car]["make"] + "Model: " + myGarage[car].model + "Year: " + myGarage[car].year + "<br>";
