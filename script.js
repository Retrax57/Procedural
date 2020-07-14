const materials = [{
    name: "PBR PLASTIC",
    img: "pbrplastic.png"
}, {
    name: "CUTTINGMAT",
    img: "cuttingmat.png"
}, {
    name: "FLANNEL",
    img: "flannel.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
}, {
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
{
    name: "DEFAULT",
    img: "default.png"
},
];

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

const modal = document.getElementById("modal");
const cards = document.querySelectorAll(".card");
const span = document.getElementsByClassName("close")[0];

for(let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        modal.style.display = "block";
        modal.querySelector("h2").innerHTML = materials[i].name;
        modal.querySelector("img").src = "img/materials/" + materials[i].img;
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal)
        modal.style.display = "none";
}