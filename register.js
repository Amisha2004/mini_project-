function validate() {
    var username = document.getElementById("handle").value;
    var password = document.getElementById("pass").value;
    var EmailId = document.getElementById("email").value;
    var ConfirmPassword = document.getElementById("passWord").value;
    if (username == "Amisha_07" && password == "Amisha@2004" && password==ConfirmPassword && EmailId=="amisha024kumari@gmail.com") {
        alert("Registered successfully");
        window.location = "login.html"; // Redirecting to other page.
        return false;
    }
    else {
       alert("You are not registered yet!");
    }
}

