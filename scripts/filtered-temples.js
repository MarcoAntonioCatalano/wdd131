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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Palmyra, New York",
    location: "Palmyra, New York",
    dedicated: "2000, April, 6",
    area: 10900,
    imageUrl:
    "https://churchofjesuschristtemples.org/templesldsorg/bc/Temples/phpto-galleries/palmyra-new-york/400x250/palmyra-new-york-temple-17437-wallpaper.jpg"
  },
  {
    templeName: "Sapporo, Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://churchofjesuschristtemples.org/templesldsorg/bc/Temples/phpto-galleries/sapporo-japan/400x250/sapporo-japan-temple-65780-wallpaper.jpg"
  }


  // Add more temple objects here...
];