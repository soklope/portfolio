const dropdownMenu = document.getElementById("dropdownMenu");
const navContainer = document.getElementById("navContainer");

navContainer.addEventListener("click", function () {
  myFunction();
});

function myFunction() {
  navContainer.classList.toggle("change");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

function menuClick() {
  dropdownMenu.style.display = "none";
  navContainer.classList.toggle("change");
}

function bm3dClick() {
  location.replace("bm3d.html");
}

function liClick() {
  location.replace("https://www.linkedin.com/in/s%C3%B8ren-kloster-pedersen-aa9481220/");
}

function homeClick() {
  location.replace("index.html");
}