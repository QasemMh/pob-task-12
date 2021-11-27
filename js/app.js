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

//setting

const navStyle = document.querySelector(".navbar-style");
const navbar_1 = document.querySelector(".navbar-1");
const navbar_2 = document.querySelector(".navbar-2");
const navbar_3 = document.querySelector(".navbar-3");
const main = document.querySelector("main");

const footer_style = document.querySelector(".footer-style");
const footer = document.querySelector(".wrapper");

navStyle.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-1")) {
    navbar_1.style.display = "block";
    navbar_2.style.display = "none";
    navbar_3.style.display = "none";
    main.classList.add("main");
  }
  if (e.target.classList.contains("btn-2")) {
    navbar_2.style.display = "flex";
    navbar_1.style.display = "none";
    navbar_3.style.display = "none";
    main.classList.remove("main");
  }
  if (e.target.classList.contains("btn-3")) {
    navbar_1.style.display = "none";
    navbar_2.style.display = "none";
    navbar_3.style.display = "flex";
    main.classList.remove("main");
  }
});

footer_style.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-1")) {
    footer.classList.remove("tow");
  }
  if (e.target.classList.contains("btn-2")) {
    footer.classList.add("tow");
  }
});
//todo save setting to localhost

/*options */

/* theme 1 */
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
// end theme

/* navbar 2  - 3*/
const menu = document.querySelector(".navbar-2 .menu");
const navLinks = document.querySelector(".navbar-2 .navbar-nav");
menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
const menu2 = document.querySelector(".navbar-3 .menu");
const navLinks2 = document.querySelector(".navbar-3 .navbar-nav");
menu2.addEventListener("click", () => {
  navLinks2.classList.toggle("open");
});
/* end navbar 2 - 3 */
