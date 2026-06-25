// HERO GALAXY BACKGROUND

const canvasContainer =
document.getElementById("hero-canvas");

const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
    75,
    window.innerWidth /
    window.innerHeight,
    0.1,
    1000
);

const renderer =
new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio,2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

canvasContainer.appendChild(
    renderer.domElement
);

camera.position.z = 80;

/* PARTICLES */

const particlesCount = 80000;

const positions =
new Float32Array(
    particlesCount * 3
);

for(let i = 0; i < particlesCount; i++){

    const radius =
        Math.pow(
            Math.random(),
            2
        ) * 180;

    const angle =
        Math.random() *
        Math.PI * 2;

    const spiral =
        radius * 0.35;

    positions[i * 3] =
        Math.cos(angle + spiral)
        * radius;

    positions[i * 3 + 1] =
        (Math.random() - 0.5)
        * 25;

    positions[i * 3 + 2] =
        Math.sin(angle + spiral)
        * radius;
}

const geometry =
new THREE.BufferGeometry();

geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const material =
new THREE.PointsMaterial({

    color:0x00d9ff,

    size:0.08,

    transparent:true,

    opacity:0.55
});

const particles =
new THREE.Points(
    geometry,
    material
);

scene.add(
    particles
);

/* MOUSE */

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
    "mousemove",
    (event)=>{

        mouseX =
        (event.clientX /
        window.innerWidth) * 2 - 1;

        mouseY =
        (event.clientY /
        window.innerHeight) * 2 - 1;
    }
);

/* ANIMATE */

function animate(){

    requestAnimationFrame(
        animate
    );

    const time =
    performance.now()
    * 0.00001;

    particles.rotation.y =
        time;

    particles.rotation.z =
        time * 0.3;

    particles.rotation.x +=
        (mouseY * 0.02 -
        particles.rotation.x)
        * 0.002;

    particles.rotation.y +=
        (mouseX * 0.02 -
        particles.rotation.y)
        * 0.002;

    renderer.render(
        scene,
        camera
    );
}

animate();

/* RESPONSIVE */

window.addEventListener(
    "resize",
    ()=>{

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);