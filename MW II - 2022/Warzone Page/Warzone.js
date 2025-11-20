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
