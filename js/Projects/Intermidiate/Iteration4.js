function myItter4(myNum = 1) {
    let write = document.getElementById("output");
    write.innerHTML = "";
    while (myNum !== 1) {
        if (!(myNum % 3)) {
            write.innerHTML += myNum + " / 3 = " + (myNum / 3);
            myNum /= 3;
        } else {
            if (!((myNum + 1) % 3)) {
                write.innerHTML += myNum + " + 1 = " + (myNum + 1);
                myNum = (myNum + 1);
            } else {
                write.innerHTML += myNum + " - 1 = " + (myNum - 1);
                myNum = (myNum - 1);
            }
        }
        write.innerHTML += "<br>";
    }
}
function startMyItter4() {
    let myNum = parseInt(document.getElementById("myNumber").value);
    if (myNum > 0) {
        myItter4(myNum);
    }
}
document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>Iteration 4</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>Iteration 4</li></ol>");
document.write("Input Number: <input type = 'number' id = 'myNumber'><button type = 'button' onclick = 'startMyItter4()'>Start Iteration</button>");
document.write("<p id = 'output'></p><?div>");