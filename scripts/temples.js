const time = document.querySelector("#time");
const lastModified = document.querySelector("#lastModified");
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-list');

const today = new Date(); 

if (time) {
    time.textContent = today.getFullYear();
}

if (lastModified) {
    lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;
}



hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    document.querySelector('.logo').classList.toggle('hide');
});

