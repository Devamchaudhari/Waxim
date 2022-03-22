var menu = document.getElementById(menuicon);
// side menu function 
function sidemenu() {
    console.log("my menu");
    if (window.innerWidth < 632) {
        console.log("less then", window.innerWidth);

        document.getElementById("sidemenu").style.width = "100%";
    } else {
        console.log("gre then", window.innerWidth);

        document.getElementById("sidemenu").style.width = "650px";
    }
    document.getElementById("sidemenu").style.height = "100%";
    document.getElementById("menu-blur").style.filter = "blur(3px)";
    document.getElementById("hero-container").style.filter = "blur(3px)";

}
// Background blur function 
function closeNav() {
    document.getElementById("sidemenu").style.width = "0";
    document.getElementById("menu-blur").style.filter = "blur(0px)";
    document.getElementById("hero-container").style.filter = "blur(0px)";
}

// Scroll function

window.addEventListener('scroll', function () {
    let nav = document.getElementById("nav")
    let scrollarrow = document.getElementById("scroll-up");
    let windowscroll = window.scrollY > 400;
    if (windowscroll) {
        nav.classList.toggle('navbar-scroll', windowscroll);
        scrollarrow.classList.toggle("arrow-scroll", windowscroll);
    } else {
        nav.classList.remove("navbar-scroll");
        scrollarrow.classList.remove("arrow-scroll", windowscroll);
    }
})

//arrow onclick function

document.on('click', '.scroll-top-arrow', function () {
    ('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});