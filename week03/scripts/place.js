const time = document.querySelector("#time");
const lastModified = document.querySelector("#lastModified");
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

const today = new Date();

if (time) {
    time.textContent = today.getFullYear();
}

if (lastModified) {
    lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;
}

