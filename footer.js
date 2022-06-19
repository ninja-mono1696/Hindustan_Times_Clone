let y=document.querySelector("#email");
document.querySelector("#btn").addEventListener("click",subscribe);
function subscribe(){
  let y=document.querySelector("#email").value;

  if(y==""){
  alert("enter email")}
  else{
    alert("subscribed succesfully")
  }

}