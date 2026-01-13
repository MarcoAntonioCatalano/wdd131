const time = document.querySelector("#time");
const lastModified = document.querySelector("#lastModified");

const today = new Date();


lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;