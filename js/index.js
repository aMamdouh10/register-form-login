var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

var loginBox = document.getElementById("login");
var regBox = document.getElementById("rejster");

var emailArray = [];
var passwordArray = [];
// if(localStorage.getItem("users") != null)
// {
//    emailArray = JSON.parse( localStorage.getItem("users"));
// }

function regTabFun() {
    regBox.classList.remove("d-none")
    loginBox.classList.add("d-none")
}

function loginTabFun() {
    regBox.classList.add("d-none")
    loginBox.classList.remove("d-none")
}

function secondPage() {
    location.replace("file:///D:/d/%D8%A7%D8%AD%D9%85%D8%AF/assignment/assignment%2010%20&%20rejester/secondPage.html")
}
function homePage() {
    location.replace("file:///D:/d/%D8%A7%D8%AD%D9%85%D8%AF/assignment/assignment%2010%20&%20rejester/index.html")
}

function login() {
    var email = document.getElementById("logEm").value;
    var password = document.getElementById("logPass").value;

    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            document.getElementById("errInp").classList.remove("d-none")
            return;
        }
        document.getElementById("errInp").classList.add("d-none")
        document.getElementById("errEmail").classList.remove("d-none")
    }
    else if (passwordArray[i] != password) {
        if (password == "") {
            document.getElementById("errpass").classList.remove("d-none")
            return;
           
        }
        document.getElementById("errpassMatch").classList.remove("d-none")
        return;
    }
    else {
        secondPage();
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }

}

function register() {
    var email = document.getElementById("rejName").value;
    var password = document.getElementById("rejEmail").value;
    var passwordRetype = document.getElementById("rejPass").value;
    if (email == "") {
        document.getElementById("rejErrInp").classList.remove("d-none")
        return;
    }
    else if (password == "") {
        document.getElementById("rejErrInp").classList.remove("d-none")
        return;
    }
    else if (passwordRetype == "") {
        document.getElementById("rejErrInp").classList.remove("d-none")
        return;
    }
    else if (password != passwordRetype) {
        document.getElementById("rejErrPass").classList.remove("d-none")
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        document.getElementById("success").classList.remove("d-none")
        document.getElementById("rejErrInp").classList.add("d-none")
        document.getElementById("rejErrPass").classList.add("d-none")

        document.getElementById("rejName").value = "";
        document.getElementById("rejEmail").value = "";
        document.getElementById("rejPass").value = "";
    }
}
