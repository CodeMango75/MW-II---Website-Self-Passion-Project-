const maps = [
    { img: "/Details/Assets/Verdansk 2.jpg", title: "VERDANSK", slogan: "Survive the chaos." },
    { img: "/Details/Assets/Al Mazrah.jpg", title: "AL MAZRAH", slogan: "Never look back." }
];

let index = 0;
const image = document.getElementById("map-image");
const title = document.getElementById("map-title");
const slogan = document.getElementById("map-slogan");

document.getElementById("right-arrow").addEventListener("click", () => {
    index = (index + 1) % maps.length;
    updateMap();
});

document.getElementById("left-arrow").addEventListener("click", () => {
    index = (index - 1 + maps.length) % maps.length;
    updateMap();
});

function updateMap() {
    image.src = maps[index].img;
    title.innerText = maps[index].title;
    slogan.innerText = maps[index].slogan;
}

const poiItems = document.querySelectorAll('.poi-item');

function checkPOIs() {
    poiItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkPOIs);
checkPOIs(); // trigger on load


// Swipe Navigation
const modes = document.querySelectorAll('.mode-item');
let currentIndex = 0;

function showMode(index) {
    modes.forEach((mode, i) => {
        mode.classList.toggle('active', i === index);
    });
}

document.getElementById('nextMode').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % modes.length;
    showMode(currentIndex);
});

document.getElementById('prevMode').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + modes.length) % modes.length;
    showMode(currentIndex);
});

// Scroll Reveal Effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('.mode-item').forEach(item => {
        const triggerBottom = window.innerHeight * 0.8;
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) item.classList.add('active');
    });
});
