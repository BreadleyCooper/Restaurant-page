// https://www.fablekitchen.ca/#about
import "./style.css"
import "./menu.css"
import "./contact.css"
import renderMenu from "./menu";
import renderContact from "./contact";

// function to call that clears the page ready to load in from other modules
function clearDOM (){
    while (main.firstChild){
        main.removeChild(main.lastChild)
    }
}

// main page elements
const content = document.querySelector("#content");
const header = document.createElement("div");
const main = document.createElement("div");
content.appendChild(header);
content.appendChild(main)
header.classList.toggle("header");
main.classList.toggle("main");

// header components
const headerLogoContainer = document.createElement("div");
const headerLogo = document.createElement("div");
const headerAddress = document.createElement("div");
const headerMenu = document.createElement("div");
header.append(headerAddress, headerLogoContainer,  headerMenu)
headerLogoContainer.appendChild(headerLogo)
headerLogoContainer.classList.toggle("headerLogoContainer");
headerLogo.classList.toggle("headerLogo")
headerAddress.classList.toggle("headerAddress");
headerMenu.classList.toggle("headerMenu");
headerAddress.textContent = "Conservatory Village \r\n \r\n\ Little Paxton"

// headerMenu components
const socialIcons = document.createElement("div");
const menuNav = document.createElement("div");
headerMenu.append(socialIcons, menuNav);
socialIcons.classList.toggle("socialIcons");
menuNav.classList.toggle("menuNav");

// social icons
const fb = document.createElement("div");
const insta = document.createElement("div");
socialIcons.append(fb, insta);
fb.classList.toggle("fb")
insta.classList.toggle("insta")
fb.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>`
insta.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>`

// navigation buttons
const menu = document.createElement("div")
const about = document.createElement("div")
const contact = document.createElement("div")
menuNav.append(menu, about, contact)
menu.textContent = "MENU";
about.textContent = "ABOUT";
contact.textContent = "CONTACT US"
menu.classList.toggle("menu")
about.classList.toggle("about")
contact.classList.toggle("menu")


// main content - name of restaurant 
function renderAbout() {
const name = document.createElement("div");
main.appendChild(name);
name.textContent = "Jamaican Grill House";
name.classList.toggle("name")


// main content - tagline
const tagline = document.createElement("div");
main.appendChild(tagline);
tagline.textContent = "For a true taste and feel of Jamaica";
tagline.classList.toggle("tagline")

// main content - opening hours
const hoursContainer = document.createElement("div")
const hoursTitle = document.createElement("div");
const hoursList = document.createElement("ul")
main.appendChild(hoursContainer)
hoursContainer.append(hoursTitle, hoursList)
hoursContainer.classList.toggle("hoursContainer");
hoursTitle.classList.toggle("hoursTitle")
hoursList.classList.toggle("hoursList")
hoursTitle.textContent = "Opening Hours"
let hoursContent = ["Monday: 12PM to 9PM", "Tuesday: 12PM to 9PM", "Wednesday: 12PM to 9PM", "Thursday: 12PM to 9PM", "Friday: 12PM to 11PM", "Saturday: 12PM to 11PM", "Sunday 12PM to 6PM"]
for (let i = 0;i<7;i++){
    const days = document.createElement("li");
    hoursList.appendChild(days);
    days.classList.toggle("days")
    days.textContent = hoursContent[i]
}
}
renderAbout();
// event listeners
fb.addEventListener("click", () => {
    window.location.assign("https://www.facebook.com/JamaicanGrillHouse")
})
insta.addEventListener("click", () =>{
    window.location.assign("https://www.instagram.com/jamaican_grillhouse")
})
menu.addEventListener("click", () => {
    clearDOM();
    renderMenu();
})
about.addEventListener("click", () =>{
    clearDOM();
    renderAbout();
})
contact.addEventListener("click", () => {
    clearDOM();
    renderContact();
})
