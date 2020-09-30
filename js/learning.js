//document.write()
/* document.write("<h1>Hello World!</h1>"); */

//alert() in html
function alertFunction() {
    alert("alert function in html");
}

//alert() in javascript
document.getElementById("alertfunction").addEventListener("click", alertFunction2);

function alertFunction2() {
  document.getElementById("alertfunction").innerHTML = alert("alert function in html");
}



//confirm()
/* confirm("Hello World?"); */

//alert() + confirm()
/* var confirm = confirm("Confirm?");
if (confirm) {
    alert('You selected "Ok"');
} else {
    alert('You selected "Cancel"');
} */

//prompt()
/* prompt("Hello, What is your name?", "default value"); */

//prompt()+alert()
/* var prompt = prompt("Hello, What is your name?", "default value");
if (confirm) { 
    alert(prompt + 'You selected "Ok"');
} else {
    alert('You selected "Cancel"');
} */

//window.location
/* window.location = "https://www.google.com/"; */

//window.open()
/* window.open('URL/href', 'name/target=""', 'options', 'replace/true/false'); */

//javascript:void(0)