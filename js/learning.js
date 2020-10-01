//document.write()
function docwritexmp() {
    var varWindow = window.open("","_blank");
    varWindow.document.write("<h1>Hello World!</h1>");
    varWindow.document.close();
};


//alert() in html
function alertFunction() {
    alert("This is example of alert");
};


//confirm()
/* confirm("Hello World?"); */
function confirmFunction() {
    confirm("This is example of confirm");
};


//alert() + confirm()
function alertconfirm() {
    var confirmation = confirm("Confirm?");
    if (confirmation) {
        alert('You selected "Ok"');
    } else {
        alert('You selected "Cancel"');
    }
};


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