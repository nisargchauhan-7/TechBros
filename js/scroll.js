const lenis = new Lenis({
    duration: 0.5,
    smoothWheel: false
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)