const dropdownMenu = document.getElementById("dropdownMenu");
const navContainer = document.getElementById("navContainer");
const caseText = document.getElementsById("overlay").addEventListener("mouseover", mouseOver);

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


