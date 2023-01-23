let drop     = document.querySelector(".drop")
let dropDown = document.querySelector(".drop-down ")
let forms = document.querySelector(".form ")
let form = document.querySelector(".forms")


drop.onclick = function(){
  
    dropDown.classList.toggle("active")
    console.log("toggle")

}
forms.onclick = function(){

  form.classList.toggle("active")
  console.log("toggle")

}
//profile
let linkProfile = document.querySelector(".profile-link")
let imgClick = document.querySelector(".img-click")

imgClick.onclick = function(){
  linkProfile.classList.toggle("active")
}

//progress
let allProgress = document.querySelectorAll(".status .box .progress")
allProgress.forEach(item =>{
  item.style.setProperty("--value", item.dataset.value)
})

///chart 

var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//data info
let dashBoard = document.querySelector(".dashboard")
let saidMenu = document.querySelector(".side-menu")
let toggleMenu = document.querySelector(".toggle-said-menu")

toggleMenu.onclick = function(){
 dashBoard.classList.toggle("notActive")
 saidMenu.classList.toggle("active")
}


let dataLink = document.querySelectorAll(".data-link")
let showDataLink = document.querySelectorAll(".showLink")

showDataLink.forEach(function(btn){
btn.addEventListener("click",function(){
  dataLink.forEach(function(e){
    
      e.classList.toggle("active")
  })
})
})
let iconSearch = document.querySelector(".search")
let inputSearch = document.querySelector(".input")
iconSearch.onclick = function(){
  inputSearch.classList.toggle("active")
}
  

