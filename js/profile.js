console.log("PROFILE JS LOADED");

gsap.registerPlugin(ScrollTrigger);

/* Scroll-Progress */

window.addEventListener("scroll",()=>{

    const scrollTop =
    window.scrollY;

    const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    (scrollTop/docHeight)*100;

    document.querySelector(
        ".scroll-progress"
    ).style.width = progress + "%";
});

/* Hero */

gsap.from(".profile-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".profile-tag, .profile-hero h1, .profile-hero h2, .profile-hero p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

/* Section Titles */

gsap.utils.toArray(".section-title").forEach(title => {

    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 85%"
        },

        y: 60,
        opacity: 0,
        duration: 1
    });

});

/* Cards */

gsap.utils.toArray(
    ".skill-box, .profile-project-card, .resume-card, .contact-card"
).forEach(card => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%"
        },

        y: 40,
        opacity: 0,
        duration: 0.8
    });

});

/* Timeline */

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%"
        },

        x: -50,
        opacity: 0,
        duration: 0.8
    });

});


const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =
        section.offsetTop - 200;

        if(window.scrollY >= top){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");
        }

    });

});

gsap.utils.toArray("section")
.forEach(section=>{

    gsap.from(section,{

        opacity:0,

        y:80,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%"
        }

    });

});

document
.querySelectorAll(
".profile-project-card,.skill-box,.resume-card"
)
.forEach(card=>{

    card.addEventListener(
    "mousemove",
    e=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.setProperty(
        "--x",
        `${x}px`
        );

        card.style.setProperty(
        "--y",
        `${y}px`
        );

    });

});