/*options */
const options = document.querySelector(".options");
const optionIcon = document.querySelector(".option-icon");
let toggle = true;

optionIcon.addEventListener("click", () => {
  if (toggle) {
    options.style.transform = "translateX(0px)";
    optionIcon.style.transform = "translateX(-200px)";
    toggle = false;
  } else {
    options.style.transform = "translateX(200px)";
    optionIcon.style.transform = "translateX(0px)";
    toggle = true;
  }
});

/*options */

/* navbar 1 */
const theme = document.querySelector("#themeButton");

let index = 1;
const color = ["dark", "light", "solar"];
theme.addEventListener("click", () => {
  getTheme();
});

function getTheme(save = false) {
  document.body.className = `${color[index]}`;
  localStorage.setItem("index", index);

  index++;
  if (index > color.length - 1) index = 0;
}

if (localStorage.getItem("index") != null) {
  let i = localStorage.getItem("index");
  index = +i;
  document.body.className = `${color[i]}`;
  index++;
  if (index > color.length - 1) index = 0;
}
/* end navbar 1 */

/* navbar 2 */
const menu = document.querySelector(".navbar-2 .menu");
const navLinks = document.querySelector(".navbar-2 .navbar-nav");
menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
/* end navbar 2 */

const styleNav = document.querySelector(".navbar-style");

styleNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-1")) {
    document.querySelector(".navbar-1").style.display = "block";
    document.querySelector(".navbar-2").style.display = "none";
    // document.querySelector(".navbar-3").style.display = "none";
  }
  if (e.target.classList.contains("btn-2")) {
    document.querySelector(".navbar-2").style.display = "flex";
    document.querySelector(".navbar-1").style.display = "none";
    //document.querySelector(".navbar-3").style.display = "none";
  }
});
