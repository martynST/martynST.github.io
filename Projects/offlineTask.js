'use strict';
function doubleChar(myString) {
    let doubledString = "";
    for (let i = 0; i < myString.length; i++) {
        doubledString += myString[i] + myString[i];
    }
    return doubledString
}
function getSandwich(myString) {
    if (myString.indexOf("bread") === -1) {
        return "";
    } else if (myString.indexOf("bread",myString.indexOf("bread")+1) === -1) {
        return "";
    } else {
        return myString.substring(myString.indexOf("bread")+5, myString.indexOf("bread",myString.indexOf("bread")+1));
    }
}
function evenlySpaced(a,b,c) {
    let myArray = [a,b,c].sort();
    if (myArray[1] - myArray[0] === myArray[2] - myArray[1]) {
        return true;
    } else {
        return false;
    }
}
function nTwice(myString, myInt) {
    return myString.substring(0,myInt) + myString.substring(myString.length-myInt,myString.length);
}
function endsLy(myString) {
    if (myString.indexOf("ly",myString.length-2) !== -1) {
        return true;
    } else {
        return false;
    }
}
/*Unfinished
function stringClean(myString) {
    if (myString.length === 1) {
        return myString;
    } else if (myString.length === 2) {
        if (myString.charAt(0) === myString.charAt(1)) {
            return myString.charAt(0);
        } else {
            return myString;
        }
    } else {
        return stringClean(myString.substring(0, myString.length-2) + stringClean(myString.substring(myString.length-2)));
    }
}
*/
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}
function bunnyEars(bunnies) {
    if (bunnies === 0) {
        return 0;
    } else if (bunnies === 1) { 
        return 2;
    } else {
        return 2 + bunnyEars(bunnies-1);
    }
}

function printDiamond (size) {
    document.getElementById('diamond').innerHTML = "<pre>";
    let temp = "<pre>";
    for (let i = 0; i < size; i++) {
        
        for (let j = size-1; j >= 0 ; j--) {
            if (j == i) {
                temp += "/";
            } else {
                temp += " ";
            }
        }
        for (let j = 0; j < size ; j++) {
            if (j == i) {
                temp += "\\";
            } else {
                temp += " ";
            }
        }
        temp += "<br>";
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size ; j++) {
            if (j == i) {
                temp += "\\";
            } else {
                temp += " ";
            }
        }
        for (let j = size-1; j >= 0 ; j--) {
            if (j == i) {
                temp += "/";
            } else {
                temp += " ";
            }
        }
    
        temp += "<br>";
    }
    temp += "</pre>";
    document.getElementById('diamond').innerHTML = temp;
}


console.log(doubleChar("The"));
console.log(doubleChar("AAbb"));
console.log(doubleChar("Hi-There"));
console.log(getSandwich("breadjambread"));
console.log(getSandwich("xxbreadjambreadyy"));
console.log(getSandwich("xxbreadyy"));
console.log(evenlySpaced(2,4,6));
console.log(evenlySpaced(4,6,2));
console.log(evenlySpaced(4,6,3));
console.log(nTwice("Hello",2));
console.log(nTwice("Chocolate", 3));
console.log(nTwice("Chocolate", 1));
console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));
//console.log(stringClean("yyzzza"));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(bunnyEars(0));
console.log(bunnyEars(1));
console.log(bunnyEars(2));
document.write("<p id = 'diamond'></p>");
printDiamond(5);