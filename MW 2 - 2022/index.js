const heroImage = document.querySelector(".hero-image img");
let scale = 1;
const maxScale = 1.1; // maximum zoom
const zoomSpeed = 0.0005; // zoom increment

function zoom() {
    if (scale < maxScale) {
        scale += zoomSpeed;
        heroImage.style.transform = `scale(${scale})`;
        requestAnimationFrame(zoom);
    }
}

zoom();
    

