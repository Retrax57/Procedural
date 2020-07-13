const materials = [{
    name: "PBR PLASTIC",
    img: "pbrplastic.png"
}, {
    name: "CUTTINGMAT",
    img: "cuttingmat.png"
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