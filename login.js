function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Amisha_07" && password == "Amisha@2004") {
        alert("Login successfully");
        window.location = "game.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("You're not registered yet!");
    }
}

