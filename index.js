function renderTime(){

    let myDate= new Date();
    let year= myDate.getYear();

    if(year<1000){
        year+= 1900
    }

    let day= myDate.getDay();
    let month= myDate.getMonth();
    let days= myDate.getDate();

    let dayarr= new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thrusday,","Friday,","Saturday,");
    let montharr= new Array("January","February","March","April","May","June","July","August","September","October","November","December");

let currentTime= new Date();
let h= currentTime.getHours();
let m= currentTime.getMinutes();
let s= currentTime.getSeconds();

if(h === 24){
    h = 0;
} else if(h > 12){
h= h-0;
}

if(h<10){
    h= "0" + h;
}
if(m<10){
    m= "0" + m;
}

if(s<10){
    s= "0" + s;
}

let myClock= document.getElementById("clockDisplay");
myClock.textContent= "" +dayarr[day]+ " " +days+ " " +montharr[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
myClock.innerText= "" +dayarr[day]+ " " +days+ " " +montharr[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

setTimeout("renderTime()", 1000);
}

renderTime();


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