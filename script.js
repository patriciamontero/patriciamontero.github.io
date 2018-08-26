// Menu
var btn_menu = document.querySelector('.btn-menu');
var btn_close_menu = document.querySelector('.btn-close-menu');
var menu = document.querySelector('.sidenav');
btn_menu.addEventListener('click', function () {
    menu.classList.add('is-visible');
});
btn_close_menu.addEventListener('click', function () {
    menu.classList.remove('is-visible');
});
// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
// Top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}