document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Factorial</small></h1>")
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Factorial</li></ol>")
function isFactorial(myNumber) { 
    let originalNumber = myNumber;
    let divisor = 1;
    let result = false;
    while (true) {
        if ((myNumber % divisor)===0) {
            myNumber /= divisor;
            if (myNumber === 1) {
                result = true;
                break;
            } else {
                divisor++;
            }
        } else {
            break;
        }
    }
    if (result === true) {
        document.getElementById('result').innerHTML = originalNumber + " is " + divisor+"!";
    } else {
        document.getElementById('result').innerHTML = originalNumber + " is not a factorial."
    }
}

function checkIsValid()
{
    let myNumber = document.getElementById("factorialNumber").value;
    if (!isNaN(myNumber) && myNumber > 0) {
        isFactorial(myNumber)
    } else {
        document.getElementById("result").innerHTML = "Not a factorial.";
    }
}
document.write("<p id = 'result'></p>");
document.write("<input type = 'number' id = 'factorialNumber'>" + "<button type = 'button' onclick = 'checkIsValid()'>click here</button></div>")
