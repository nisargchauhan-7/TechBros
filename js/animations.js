gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO ANIMATION
========================= */

const heroTimeline = gsap.timeline();

heroTimeline
.from(".hero-badge", {
    opacity: 0,
    y: 30,
    duration: 0.8
})
.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8
}, "-=0.4")
.from(".hero h1", {
    opacity: 0,
    y: 60,
    duration: 1
}, "-=0.4")
.from(".hero-description", {
    opacity: 0,
    y: 40,
    duration: 0.8
}, "-=0.5")
.from(".hero-buttons", {
    opacity: 0,
    y: 30,
    duration: 0.8
}, "-=0.4")
.from(".hero-stats", {
    opacity: 0,
    y: 30,
    duration: 0.8
}, "-=0.4");


/* =========================
   ABOUT CARDS
========================= */

gsap.utils.toArray(".team-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },

        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out"

    });

});


/* =========================
   SKILLS CARDS
========================= */

gsap.utils.toArray(".expertise-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },

        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out"

    });

});


/* =========================
   PROJECT CARDS PREMIUM
========================= */

gsap.utils.toArray(".project-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        opacity: 0,
        y: 120,
        scale: 0.9,
        duration: 1.2,
        delay: index * 0.15,
        ease: "power4.out"

    });

});

/* =========================
   PROJECT TILT EFFECT
========================= */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        gsap.to(card, {

            rotateX,
            rotateY,
            duration: 0.4,
            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "power3.out"

        });

    });

});


/* =========================
   SERVICES STAGGER
========================= */

gsap.from(".service-card",{

    scrollTrigger:{
        trigger:".services-grid",
        start:"top 80%"
    },

    opacity:0,

    y:100,

    stagger:0.15,

    duration:1.2,

    ease:"power4.out"
});

/* =========================
   SERVICE CARD TILT
========================= */

document
.querySelectorAll(".service-card")
.forEach(card=>{

    card.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            ((x / rect.width)-0.5)*8;

            const rotateX =
            ((y / rect.height)-0.5)*-8;

            gsap.to(card,{
                rotateX,
                rotateY,
                duration:.4
            });
        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            gsap.to(card,{
                rotateX:0,
                rotateY:0,
                duration:.6
            });

        }
    );

});


/* =========================
   CONTACT SECTION
========================= */

gsap.from(".contact-info",{

    scrollTrigger:{
        trigger:".contact",
        start:"top 80%"
    },

    x:-80,

    opacity:0,

    duration:1.2,

    ease:"power4.out"
});

gsap.from(".contact-form-card",{

    scrollTrigger:{
        trigger:".contact",
        start:"top 80%"
    },

    x:80,

    opacity:0,

    duration:1.2,

    ease:"power4.out"
});


/* =========================
   REFRESH AFTER LOAD
========================= */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});