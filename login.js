let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    flag = false;
    let Email = form.email.value;
    let pass = form.password.value;
    userData.forEach(function(el) {
        if (Email == el.email && pass == el.password) {
            alert("loggin successfull");
            flag = true;
        }
    })
    if (!flag) {
        alert("login fails")
    }
})


// for(let i=0;i<user.length;i++){
//     if(email==user[i].email&&pass==user[i].pass){
//         ale
//         flag=true;
//     }
// }
// if(!flag){
//     aler;
// }