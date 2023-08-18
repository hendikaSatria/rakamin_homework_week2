const btnNav =  document.querySelector(".btn-mobile-nav");
const header =  document.querySelector(".header");
const btnReadMore =  document.getElementById("btn-read-more");

btnNav.addEventListener('click', function() {
    header.classList.toggle("open");
});


