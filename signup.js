let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];


form.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = {
        email: form.email.value,
        password: form.password.value,
    }

    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successfully");
    window.location.href = "login2.html";


});

//   check-box-for-password


function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}