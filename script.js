const materials = [{
    name: "BRICKS",
    img: "bricks.png"
}, {
    name: "LEATHER",
    img: "leather.png"
}, {
    name: "MARBLE",
    img: "marble.png"
}, {
    name: "METAL",
    img: "metal.png"
}, {
    name: "PAINTED WALL",
    img: "paintedwall.png"
}, {
    name: "PAVEMENT",
    img: "pavement.png"
}, {
    name: "PAVEMENT",
    img: "pavement2.png"
}, {
    name: "ROCK",
    img: "rock.png"
}, {
    name: "ROCK",
    img: "rock2.png"
}, {
    name: "WOODEN FLOOR",
    img: "woodfloor.png"
}];

const row = document.getElementById("materials");

for (let i = 0; i < materials.length; i++) {
    row.innerHTML += `<div class="column">
            <div class="card">
                <img src="img/materials/${materials[i].img}" alt="${materials[i].name}" style="width:100%;border-radius: 10px 10px 0 0;">
                <div class="container">
                    ${materials[i].name}
                </div>
            </div>
        </div>`;
}