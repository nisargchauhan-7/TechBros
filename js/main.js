window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2500);

});

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});