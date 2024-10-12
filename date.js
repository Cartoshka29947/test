document.getElementById("nav").onmouseover = function (event) {
  const target = event.target;
  if (target.className == "menuItem") {
    let s = target.getElementsByClassName("submenu");
    closeMenu();
    s[0].style.display = "block";
  }
};

document.onmouseover = function (event) {
  const target = event.target;
  console.log(event.target);
  if (target.className != "menuItem" && target.className != "submenu") {
    closeMenu();
  }
};

function closeMenu() {
  const menu = document.getElementById("nav");
  const subm = document.getElementsByClassName("submenu");
  for (let i = 0; i < subm.length; i++) {
    subm[i].style.display = "none";
  }
}
