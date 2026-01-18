const time = document.querySelector("#time");
const lastModified = document.querySelector("#lastModified");
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

const today = new Date();

// 1. Display the current year
if (time) {
    time.textContent = today.getFullYear();
}

// 2. Display the last modified date
if (lastModified) {
    lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;
}

// 3. Hamburger Menu Toggle
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});