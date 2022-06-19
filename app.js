// for adding padding top when scrolling from nav,for this to work add app.js to html files

const navigationHeight = document.querySelector('nav').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 10 + "px")