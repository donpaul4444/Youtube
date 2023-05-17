let searchIcon = document.getElementById("search-icon");
let testing1 = document.getElementById("testing");
let searchinput = document.getElementById("s-input");
searchinput.addEventListener("focus", showicon);
searchinput.addEventListener("focusout", hideicon);
function showicon() {
  searchIcon.style.display = "block";
  testing1.style.borderColor = "blue";
}
function hideicon() {
  searchIcon.style.display = "none";
  testing1.style.borderColor = "grey";
}
let sidebar = document.getElementsByClassName("child1")[0];
let menu = document.getElementById("hamburger");
menu.addEventListener("click", don);
function don() {
  let style = window.getComputedStyle(sidebar);
  let left = style.getPropertyValue("left");
  let pos = style.getPropertyValue("position");
  if (pos == "absolute") {
    if (left != "0px") {
      sidebar.style.left = "0px";
    } else {
      sidebar.style.left = "-100%";
    }
  }
}
