var btn_menu = document.querySelector('.btn-menu');
var btn_close_menu = document.querySelector('.btn-close-menu');
var menu = document.querySelector('.sidenav');

btn_menu.addEventListener('click', function () {
    menu.classList.add('is-visible');
});
btn_close_menu.addEventListener('click', function () {
    menu.classList.remove('is-visible');
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}