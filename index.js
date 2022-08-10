const dropdownMenu = document.getElementById("dropdownMenu");
const scrollIndicator = document.getElementById("scroll");

function myFunction(x) {
  x.classList.toggle("change");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

function showScroll() {
  scrollIndicator.style.display = "block";
}

setInterval(showScroll(), 1000);
