window.onload = function () {
//Mobile nav display
const toggle = document
.querySelector("#header #toggle");

toggle.addEventListener("click", function (e) {
  const nav = document.querySelector("#header .nav");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
  else{
    nav.classList.add("active");
  }
});
//Opens submenu

const brands = document.querySelector("#header .brands");
brands.addEventListener("click", function () {
const moreBrands = document.querySelector("#header .more-brands");
moreBrands.classList.toggle("display");
if(moreBrands.classList.contains("display")){
  this.style.background = "rgb(49,49,52)";
}
else{
  this.style.background="unset";
}
});
}