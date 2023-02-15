class info{
    constructor(location, temp, date, time){
        this.location = location;
        this.temp = temp + "degrees";
        this.date = date;
        this.time = time;
    }
}
var d1 = new Date();
hour = d1.getHours();
day = d1.getDay();
const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const newdelhi = new info("New Delhi", "23", "11/2/23", "0000 hrs");
const mumbai = new info("Mumbai", "23", "11/2/23", "0000 hrs");
const hyderabad = new info("Hyderabad", "23", "11/2/23", "0000 hrs");
const losangeles = new info("Los Angeles", "23", "11/2/23", "0000 hrs");
const punjab = new info("Punjab", "23", "11/2/23", "0000 hrs");
const all_div = document.querySelectorAll(".animated");
const all_h6 = document.querySelectorAll("h6");
const all_span = document.querySelectorAll("span");
const all_im = document.querySelectorAll("img");
const first_cont_img = document.querySelectorAll(".fourth img")
const all_img = [document.querySelectorAll(".first img"), document.querySelectorAll(".second img"),
document.querySelectorAll(".third img"), document.querySelectorAll(".fourth img")];
const all_t = [document.querySelector(".first table"), document.querySelector(".second table"),
document.querySelector(".third table"), document.querySelector(".fourth table")]
all_loc = [mumbai, punjab, newdelhi, losangeles];

var h1 = document.querySelectorAll("#t_" + 1 + " .hour td");
var d1 = document.querySelectorAll("#t_" + 1 + " .days td");
var dt1 = document.querySelectorAll("#t_" + 1 + " .temp td");
var h2 = document.querySelectorAll("#t_" + 2 + " .hour td");
var d2 = document.querySelectorAll("#t_" + 2 + " .days td");
var dt2 = document.querySelectorAll("#t_" + 2 + " .temp td");
var h3 = document.querySelectorAll("#t_" + 3 + " .hour td");
var d3 = document.querySelectorAll("#t_" + 3 + " .days td");
var dt3 = document.querySelectorAll("#t_" + 3 + " .temp td");
var h4 = document.querySelectorAll("#t_" + 4 + " .hour td");
var d4 = document.querySelectorAll("#t_" + 4 + " .days td");
var dt4 = document.querySelectorAll("#t_" + 4 + " .temp td");
var i1 = document.querySelectorAll("#t_" + 1 + " .d_img img");
var i2 = document.querySelectorAll("#t_" + 2 + " .d_img img");
var i3 = document.querySelectorAll("#t_" + 3 + " .d_img img");
var i4 = document.querySelectorAll("#t_" + 4 + " .d_img img");
var ht1 = document.querySelectorAll("#t_" + 1 + " .h_temp td");
var ht2 = document.querySelectorAll("#t_" + 2 + " .h_temp td");
var ht3 = document.querySelectorAll("#t_" + 3 + " .h_temp td");
var ht4 = document.querySelectorAll("#t_" + 4 + " .h_temp td");


for (let i = 0 ; i < 7 ; i++){
  fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=" + all_loc[0].location + "&days=7")
  .then(response => response.json())
  .then(data => {d1[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10)
  dt1[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
  i1[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
  if (hour+i < 24){
  h1[i].innerHTML = hour + i
  ht1[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c +"°C"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=" + all_loc[1].location + "&days=7")
  .then(response => response.json())
  .then(data => {d2[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10)
dt2[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i2[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h2[i].innerHTML = hour + i
ht2[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=" + all_loc[2].location + "&days=7")
  .then(response => response.json())
  .then(data => {d3[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10)
dt3[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i3[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h3[i].innerHTML = hour + i
ht3[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c+"°C"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=" + all_loc[3].location + "&days=7")
  .then(response => response.json())
  .then(data => {d4[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10)
dt4[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i4[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h4[i].innerHTML = hour + i
ht4[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}})
}
function ok(){
fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=Los Angeles&days=7")
.then(response => response.json())
.then(data => {})
}
ok();
for (let i = 0 ; i < all_loc.length ; i++){
  fetch("http://api.weatherapi.com/v1/current.json?key=5623049573814f75a9a181747231102&q=" + all_loc[i].location)
  .then(response => response.json())
  .then(data => {all_h6[i].innerHTML = data.current.temp_c + "°C"
                 all_span[2*i].innerHTML += " " + data.current.vis_km + "kph"
                 all_span[2*i+1].innerHTML += " " + data.current.humidity})
}

document.querySelector("button").addEventListener("click", function(event){
  event.preventDefault();
  for (let i = 0 ; i < 4 ; i++){all_div[i].style.display = "none";}
  document.querySelector(".info_block").classList.remove("hide");
  dat = document.querySelectorAll(".i_data .days td");
  datt = document.querySelectorAll(".i_data .temp td");
  ima = document.querySelectorAll(".i_data .d_img img");
  hou = document.querySelectorAll(".i_data .hour td");
  htem = document.querySelectorAll(".i_data .h_temp td");
  fetch("http://api.weatherapi.com/v1/forecast.json?key=5623049573814f75a9a181747231102&q=" + document.querySelector("input").value + "&days=7")
  .then(response => response.json())
  .then(data => {for (let i = 0 ; i < 7 ; i++){
  dat[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10)
  datt[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
  ima[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
  if (hour+i <24){
  hou[i].innerHTML = hour + i
  htem[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}}})});

for(let i = 0 ; i < all_div.length ; i++){
  all_div[i].addEventListener("mouseenter", function(){
    all_div[i].classList.remove("ani2");
    all_div[i].classList.add("ani");
  });
  all_div[i].addEventListener("animationend", function(event){
    if (event.animationName == "expand"){
      document.querySelector("."+all_div[i].classList[1]+" table").classList.remove("visibility");
      all_div[i].style.height = "60%";
      all_div[i].style.width = "20%";
      all_div[i].classList.remove("ani");
      }
    else{
      all_div[i].style.height = "20%";
      all_div[i].style.width = "15%";
      all_div[i].classList.remove("ani2");
    }
    });
  all_div[i].addEventListener("mouseleave", function(){
    all_div[i].classList.remove("ani");
    all_div[i].classList.add("ani2");
    document.querySelector("."+all_div[i].classList[1]+" table").classList.add("visibility");
});
}
