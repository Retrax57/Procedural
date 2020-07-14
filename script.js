const materials = [{
    name: "PBR PLASTIC",
    img: ["pbrplastic.png"],
    file: "PBRPlastic.blend",
}, {
    name: "CUTTING MAT",
    img: ["cuttingmat.png"],
    file: "CuttingMat.blend"
}, {
    name: "FLANNEL",
    img: ["flannel.png"],
    file: "Flannel.blend"
}, {
    name: "GRAINY PLASTIC",
    img: ["grainyplastic.png"],
    file: "GrainyPlastic.blend"
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
}, {
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: ""
},
];

const row = document.getElementById("materials");

for (let i = 0; i < materials.length; i++) {
    row.innerHTML += `<div class="column">
            <div class="card">
                <img src="img/materials/${materials[i].img[0]}" alt="${materials[i].name}" style="width:100%;border-radius: 10px 10px 0 0;">
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
        modal.querySelector("img").src = "img/materials/" + materials[i].img[0];
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal)
        modal.style.display = "none";
}
