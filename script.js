var d1 = new Date();
hour = d1.getHours();
day = d1.getDay();
const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const all_div = document.querySelectorAll(".animated");
const all_h6 = document.querySelectorAll("#fl");
const all_span = document.querySelectorAll("#nfl");
const all_im = document.querySelectorAll("img");
const first_cont_img = document.querySelectorAll(".fourth img")
const all_img = [document.querySelectorAll(".first img"), document.querySelectorAll(".second img"),
document.querySelectorAll(".third img"), document.querySelectorAll(".fourth img")];
const all_t = [document.querySelector(".first table"), document.querySelector(".second table"),
document.querySelector(".third table"), document.querySelector(".fourth table")]
all_locations = ["Mumbai","Punjab","New York","Los Angeles","Chennai","Singapore","Kerala","Hyderabad","New Delhi","Karachi","Tokyo",
"Sydney"];
all_loc = [];
for (let i = 0 ; i < 4 ; i++){
  var rand = Math.floor(Math.random()*all_locations.length);
  if (all_loc.includes(all_locations[rand],0) == false){
  all_loc.push(all_locations[rand]);}
  else{i--;}
}
var h1 = document.querySelectorAll("#t_1 .hour td");
var d1 = document.querySelectorAll("#t_1 .days td");
var dt1 = document.querySelectorAll("#t_1 .temp td");
var h2 = document.querySelectorAll("#t_2 .hour td");
var d2 = document.querySelectorAll("#t_2 .days td");
var dt2 = document.querySelectorAll("#t_2 .temp td");
var h3 = document.querySelectorAll("#t_3 .hour td");
var d3 = document.querySelectorAll("#t_3 .days td");
var dt3 = document.querySelectorAll("#t_3 .temp td");
var h4 = document.querySelectorAll("#t_4 .hour td");
var d4 = document.querySelectorAll("#t_4 .days td");
var dt4 = document.querySelectorAll("#t_4 .temp td");
var i1 = document.querySelectorAll("#t_1 .d_img img");
var i2 = document.querySelectorAll("#t_2 .d_img img");
var i3 = document.querySelectorAll("#t_3 .d_img img");
var i4 = document.querySelectorAll("#t_4 .d_img img");
var ht1 = document.querySelectorAll("#t_1 .h_temp td");
var ht2 = document.querySelectorAll("#t_2 .h_temp td");
var ht3 = document.querySelectorAll("#t_3 .h_temp td");
var ht4 = document.querySelectorAll("#t_4 .h_temp td");
all_s_t = document.querySelectorAll("#s_table td");
const all_wind_dir =  {"N":"⬆", "S":"⬇","W":"⬅","E":"➡","NW":"↖","NE":"↗","SW":"↙","SE":"↘",
                  "NNW":"↖","WNW":"↖","NNE":"↗","ENE":"↗","ESE":"↘","SSE":"↘","WSW":"↙","SSW":"↙"};

for(let i = 0 ; i < all_s_t.length ; i++){
  all_s_t[i].addEventListener("click", function(){show_det(event,all_s_t[i].innerHTML.substring(0,all_s_t[i].innerHTML.indexOf(",")))});
}
document.querySelectorAll("#nav_bar td")[1].addEventListener("click", function(){
  document.querySelector(".info_block").classList.add("hide");
  document.querySelector(".info_block_r1").classList.add("hide1");
  document.querySelector(".info_block_r2").classList.add("hide1");
  document.querySelector(".aboutme").classList.remove("hide1");
  document.querySelector(".docs").classList.add("hide1");
  document.querySelector(".contact").classList.add("hide1");
  for (let i = 0 ; i < 4 ; i++){all_div[i].style.display="none";}});
document.querySelectorAll("#nav_bar td")[2].addEventListener("click", function(){
    document.querySelector(".info_block").classList.add("hide");
    document.querySelector(".info_block_r1").classList.add("hide1");
    document.querySelector(".info_block_r2").classList.add("hide1");
    document.querySelector(".docs").classList.remove("hide1");
    document.querySelector(".aboutme").classList.add("hide1");
    document.querySelector(".contact").classList.add("hide1");
    for (let i = 0 ; i < 4 ; i++){all_div[i].style.display="none";}});
document.querySelectorAll("#nav_bar td")[3].addEventListener("click", function(){
      document.querySelector(".info_block").classList.add("hide");
      document.querySelector(".info_block_r1").classList.add("hide1");
      document.querySelector(".info_block_r2").classList.add("hide1");
      document.querySelector(".contact").classList.remove("hide1");
      document.querySelector(".docs").classList.add("hide1");
      document.querySelector(".aboutme").classList.add("hide1");
      for (let i = 0 ; i < 4 ; i++){all_div[i].style.display="none";}});

document.querySelector("#nav_bar td").addEventListener("click", function(){
  for (let i = 0 ; i < 4 ; i++){all_div[i].style.display="";}
  document.querySelector(".info_block").classList.add("hide");
  document.querySelector(".info_block_r1").classList.add("hide1");
  document.querySelector(".info_block_r2").classList.add("hide1");
  document.querySelector(".aboutme").classList.add("hide1");
  document.querySelector(".contact").classList.add("hide1");
  document.querySelector(".docs").classList.add("hide1");
});

for (let i = 0 ; i < 7 ; i++){
  fetch("https://api.weatherapi.com/v1/forecast.json?key=04d3bcaaaf664504ab3124143232803&q=" + all_loc[0] + "&days=7")
  .then(response => response.json())
  .then(data => {document.querySelector(".first h5").innerHTML = all_loc[0] + ", "+data.location.country
    d1[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10).replace("-","/")
  dt1[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
  i1[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
  if (hour+i < 24){
  h1[i].innerHTML = hour + i + " hrs"
  ht1[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c +"°C"}
  else{h1[i].innerHTML = "-"
  ht1[i].innerHTML = "-"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("https://api.weatherapi.com/v1/forecast.json?key=04d3bcaaaf664504ab3124143232803&q=" + all_loc[1] + "&days=7")
  .then(response => response.json())
  .then(data => {document.querySelector(".second h5").innerHTML = all_loc[1] + ", " + data.location.country
    d2[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10).replace("-","/")
dt2[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i2[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h2[i].innerHTML = hour + i + " hrs"
ht2[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}
else{h2[i].innerHTML = "-"
ht2[i].innerHTML = "-"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("https://api.weatherapi.com/v1/forecast.json?key=04d3bcaaaf664504ab3124143232803&q=" + all_loc[2] + "&days=7")
  .then(response => response.json())
  .then(data => {document.querySelector(".third h5").innerHTML = all_loc[2] + ", "+data.location.country
    d3[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10).replace("-","/")
dt3[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i3[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h3[i].innerHTML = hour + i +" hrs"
ht3[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c+"°C"}
else{h3[i].innerHTML = "-"
ht3[i].innerHTML = "-"}})
}
for (let i = 0 ; i < 7 ; i++){
  fetch("https://api.weatherapi.com/v1/forecast.json?key=04d3bcaaaf664504ab3124143232803&q=" + all_loc[3] + "&days=7")
  .then(response => response.json())
  .then(data => {document.querySelector(".fourth h5").innerHTML = all_loc[3] + ", "+data.location.country
    d4[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10).replace("-","/")
dt4[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
i4[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
if (hour+i <24){
h4[i].innerHTML = hour + i + " hrs"
ht4[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}
else{h4[i].innerHTML = "-"
ht4[i].innerHTML = "-"}})
}

for (let i = 0 ; i < all_loc.length ; i++){
  fetch("https://api.weatherapi.com/v1/current.json?key=04d3bcaaaf664504ab3124143232803&q=" + all_loc[i])
  .then(response => response.json())
  .then(data => {all_h6[i].innerHTML = data.current.temp_c + "°C"
                 all_span[2*i].innerHTML += "  -  "+ data.current.wind_kph + "kph" + " "+data.current.wind_dir
                 all_span[2*i+1].innerHTML += "  -  "+ data.current.humidity
                 document.querySelectorAll("#fl1")[i].innerHTML +=" "+ data.current.feelslike_c+"°C"})
}

function show_det(event,locat){
  event.preventDefault();
  document.querySelector(".aboutme").classList.add("hide1");
  document.querySelector(".contact").classList.add("hide1");
  document.querySelector(".docs").classList.add("hide1");
  document.querySelector("input").value = "";
  dat = document.querySelectorAll(".i_data .days td");
  datt = document.querySelectorAll(".i_data .temp td");
  ima = document.querySelectorAll(".i_data .d_img img");
  hou = document.querySelectorAll(".i_data .hour td");
  htem = document.querySelectorAll(".i_data .h_temp td");
  wst = document.querySelectorAll(".wst td");
  wsi = document.querySelectorAll(".wsi td");
  wt = document.querySelectorAll(".time td");
  ast = document.querySelectorAll(".ast td");
  mp = document.querySelector(".mp");
  fetch("https://api.weatherapi.com/v1/forecast.json?key=04d3bcaaaf664504ab3124143232803&q=" + locat + "&days=7")
  .then(response => response.json())
  .then(data => {mp.innerHTML = "Moon Phase" + " - "+ data.forecast.forecastday[0].astro.moon_phase
    ast[0].innerHTML = data.forecast.forecastday[0].astro.moonrise
    ast[1].innerHTML = data.forecast.forecastday[0].astro.moonset
    ast[2].innerHTML = data.forecast.forecastday[0].astro.sunrise
    ast[3].innerHTML = data.forecast.forecastday[0].astro.sunset
    for (let i = 0 ; i < 7 ; i++){
  document.querySelector("#s_table").classList.add("hide1")
  document.querySelector("h3").innerHTML = locat +", "+ data.location.country
  document.querySelector("#p1").innerHTML = data.current.temp_c + "°C"
  dat[i].innerHTML = data.forecast.forecastday[i].date.substring(6,10).replace("-","/")
  datt[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c + "°C"
  ima[i].src = data.forecast.forecastday[i].day.condition.icon.substring(29,46)
  if (hour+i <24){
  hou[i].innerHTML = hour + i + " hrs"
  wt[i].innerHTML = hour + i + " hrs"
  wst[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].wind_kph+"kph"
  wsi[i].innerHTML = all_wind_dir[data.forecast.forecastday[0].hour[hour+i].wind_dir]
  htem[i].innerHTML = data.forecast.forecastday[0].hour[hour+i].temp_c + "°C"}
  else{hou[i].innerHTML = "-"
  wt[i].innerHTML = "-"
  htem[i].innerHTML = "-"
  wst[i].innerHTML = "-"
  wsi[i].innerHTML = "-"}}
  for (let i = 0 ; i < 4 ; i++){all_div[i].style.display = "none";}
  document.querySelector(".info_block").classList.remove("hide");
  document.querySelector(".info_block_r1").classList.remove("hide1");
  document.querySelector(".info_block_r2").classList.remove("hide1");})
  .catch(err =>{document.querySelector("#err_c").classList.remove("hide1");
                setTimeout(function(){document.querySelector("#err_c").classList.add("hide1")},3000);});
}

document.querySelector("button").addEventListener("click", function(){show_det(event,document.querySelector("input").value);});

document.querySelector("input").addEventListener("keydown", function(event){
  document.querySelector("#s_table").classList.add("hide1");
  var loca = "";
  setTimeout(function(){loca = document.querySelector("input").value;
  if(document.querySelector("input").value!=0){
  fetch("https://api.weatherapi.com/v1/search.json?key=04d3bcaaaf664504ab3124143232803&q=" + loca)
  .then(response => response.json())
  .then(data =>{if(data.length != 0){
                document.querySelector("#s_table").classList.remove("hide1");
                for(let i = 0 ; i < data.length ; i++){
                if (i>3){break;}
                all_s_t[i].innerHTML = data[i].name + ", "+data[0].region+", "+data[0].country}}})}},10);});

for(let i = 0 ; i < all_div.length ; i++){
  all_div[i].addEventListener("mouseenter", function(){
    all_div[i].classList.remove("ani2");
    all_div[i].classList.add("ani");
  });
  all_div[i].addEventListener("animationend", function(event){
    if (event.animationName == "expand"){
      document.querySelector("."+all_div[i].classList[1]+" table").classList.add("fadein");
      document.querySelector("."+all_div[i].classList[1]+" table").classList.remove("visibility");
      all_div[i].style.height = "60%";
      all_div[i].style.width = "20%";
      all_div[i].classList.remove("ani");
      }
    else if(event.animationName == "contract"){
      all_div[i].style.height = "20%";
      all_div[i].style.width = "15%";
      all_div[i].classList.remove("ani2");
    }
    else{document.querySelector("."+all_div[i].classList[1]+" table").classList.remove("fadein");}
    });
  all_div[i].addEventListener("mouseleave", function(){
    all_div[i].classList.remove("ani");
    all_div[i].classList.add("ani2");
    document.querySelector("."+all_div[i].classList[1]+" table").classList.add("visibility");
});}
