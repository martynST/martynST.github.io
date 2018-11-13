document.write("<div class=\"container\"><h1 class=\"mt-4 mb-3\">Projects <small>DOM 1</small></h1>");
document.write("<ol class='breadcrumb'><li class='breadcrumb-item'><a href='index.html'>Home</a></li><li class='breadcrumb-item'><a href='Projects.html'>Projects</a></li><li class='breadcrumb-item active'>DOM 1</li></ol>");
document.write("<div id = \"dom1Container\"></div>");
function dom11() {
    document.getElementById("dom1Container").innerHTML = "<p id = DOM1></p>";
}
function dom12() {
    document.getElementById("DOM1").innerHTML = document.getElementById("DOMI").value;
}
function dom13() {
    let element =  document.getElementById("DOM1");
    element.parentNode.removeChild(element);
}
document.write("<input type\"text\" id = \"DOMI\"><p></p>");
document.write("<button onclick=\"dom11()\">add para</button>");
document.write("<button onclick=\"dom12()\">edit para</button>");
document.write("<button onclick=\"dom13()\">remove para</button></div>");