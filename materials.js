const materials = [{
    name: "PBR PLASTIC",
    img: ["pbrplastic.png"],
    file: "PBRPlastic.blend",
    size: 0.47,
    blender: "2.7x",
    engine: "Cycles",
    author: "Retrax",
    pub: "July 13, 2020",
    lic: "CC0 1.0 Universal",
    desc: "A simple PBR plastic shader."
}, {
    name: "CUTTING MAT",
    img: ["cuttingmat.png"],
    file: "CuttingMat.blend",
    size: 0.53,
    author: "Retrax",
    blender: "2.7x",
    engine: "Cycles",
    pub: "July 13, 2020",
    lic: "CC0 1.0 Universal",
    desc: "A shader designed to emulate the surface of a cutting mat which is often used in workshop."
}, {
    name: "FLANNEL",
    img: ["flannel.png"],
    file: "Flannel.blend",
    size: 0.60,
    author: "Nanoman",
    blender: "2.7x",
    engine: "Cycles",
    pub: "July 13, 2020",
    lic: "CC0 1.0 Universal",
    desc: "A shader designed to emulate the surface of flannel clothing."
}, {
    name: "GRAINY PLASTIC",
    img: ["grainyplastic.png"],
    file: "GrainyPlastic.blend",
    size: 0.47,
    author: "Retrax",
    blender: "2.7x",
    engine: "Cycles",
    pub: "July 14, 2020",
    lic: "CC0 1.0 Universal",
    desc: "A shader which looks good on objects designed to look like the surface of electronic items such as a T.V. remote control."
}, {
    name: "CARBON FIBRE",
    img: ["carbonfibre.png"],
    file: "https://gumroad.com/l/rkqRS",
    size: 0.97,
    author: "Malicious Brews",
    blender: "2.8x",
    engine: "Cycles",
    pub: "July 14, 2020",
    lic: "CC0 1.0 Universal",
    desc: "Shader which tries to emulate the surface of carbon fibre sheets"
}, {
    name: "ROCK1",
    img: ["rock1.png"],
    file: "Rock1.blend",
    size: 7.30,
    author: "Luciano Marquez",
    blender: "2.8x",
    engine: "Cycles/Eevee",
    pub: "10 July, 2020",
    lic: "CC BY 2.0",
    desc: "Fantastic rock shader by Luciano Marquez."
}, {
    name: "BRICKS1",
    img: ["bricks1.png"],
    file: "https://gumroad.com/l/Brcks",
    size: 2.92,
    author: "Simon Thommes",
    blender: "2.8x",
    engine: "Cycles",
    pub: "16 July, 2020",
    lic: "CC BY 2.0",
    desc: "Realistic set of brick shaders by Simon Thommes."
}, {
    name: "BRICKS2",
    img: ["bricks2.png"],
    file: "https://gumroad.com/l/Brcks",
    size: 2.92,
    author: "Simon Thommes",
    blender: "2.8x",
    engine: "Cycles",
    pub: "16 July, 2020",
    lic: "CC BY 2.0",
    desc: "Realistic set of brick shaders by Simon Thommes."
}, {
    name: "BRICKS3",
    img: ["bricks3.png"],
    file: "https://gumroad.com/l/Brcks",
    size: 2.92,
    author: "Simon Thommes",
    blender: "2.8x",
    engine: "Cycles",
    pub: "16 July, 2020",
    lic: "CC BY 2.0",
    desc: "Realistic set of brick shaders by Simon Thommes."
}, {
    name: "SCALES",
    img: ["scales.png"],
    file: "https://gumroad.com/l/sneks",
    size: 4.32,
    author: "Simon Thommes",
    blender: "2.8x",
    engine: "Cycles/Eevee",
    pub: "17 July, 2020",
    lic: "CC BY 2.0",
    desc: "Make your own snek and maybe some roof tiling too !"
}, {
    name: "WICKER",
    img: ["wicker.png"],
    file: "https://gumroad.com/l/NshL",
    size: 1.36,
    author: "erindale",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC0 1.0 Universal",
    desc: "A material to generate wicker/weaving"
}, {
    name: "KNITTED CLOTH",
    img: ["knittedcloth.png"],
    file: "https://gum.co/Knittr",
    size: 1.11,
    author: "Simon Thommes",
    blender: "2.7x/2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC BY 2.0",
    desc: "A material generate knitted cloth material such as sweaters"
}, {
    name: "ALIEN SKIN",
    img: ["alienskin.png"],
    file: "AlienSkin.blend",
    size: 0.64,
    author: "bebop",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC0 2.0 Universal",
    desc: "Suitable material to dress up with if you want to be a xenomorph"
}, {
    name: "ALIEN FLESH",
    img: ["alienflesh.png"],
    file: "AlienFlesh.blend",
    size: 0.60,
    author: "bebop",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC0 2.0 Universal",
    desc: "mmm... flesh"
}, {
    name: "TOFFEE & NUTS",
    img: ["toffee&nuts.png"],
    file: "Toffee&Nuts.blend",
    size: 0.60,
    author: "bebop",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC0 2.0 Universal",
    desc: "Toffee and nuts mate, simple as"
}, {
    name: "CHOCOLATE & NUTS",
    img: ["chocolate&nuts.png"],
    file: "Chocolate&Nuts.blend",
    size: 0.57,
    author: "bebop",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17 July, 2020",
    lic: "CC0 2.0 Universal",
    desc: "Who doesnt like some chocolate ?"
}, {
    name: "WOOD1",
    img: ["wood1.png"],
    file: "https://gumroad.com/l/qRzuU",
    size: 8.10,
    author: "erindale",
    blender: "2.7x/2.8x",
    engine: "Cycles",
    pub: "17th July, 2020",
    lic: "CC BY 2.0",
    desc: "A set of realistic wood materials"
}, {
    name: "WOOD2",
    img: ["wood2.png"],
    file: "https://gumroad.com/l/qRzuU",
    size: 8.10,
    author: "erindale",
    blender: "2.7x/2.8x",
    engine: "Cycles",
    pub: "17th July, 2020",
    lic: "CC BY 2.0",
    desc: "A set of realistic wood materials"
}, {
    name: "WOOD3",
    img: ["wood3.png"],
    file: "https://gumroad.com/l/qRzuU",
    size: 8.10,
    author: "erindale",
    blender: "2.7x/2.8x",
    engine: "Cycles",
    pub: "17th July, 2020",
    lic: "CC BY 2.0",
    desc: "A set of realistic wood materials"
}, {
    name: "RUSTY PAINTED METAL",
    img: ["rustypaintedmetal.png"],
    file: "RustyPaintedMetal.blend",
    size: 0.76,
    author: "Zantique",
    blender: "2.8x",
    engine: "Cycles",
    pub: "17th July, 2020",
    lic: "CC BY 2.0",
    desc: "A flaking rusted metal paint generator"
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: "",
    size: 0.00,
    author: "",
    blender: "0.0",
    engine: "",
    pub: "Januray 1, 1970",
    lic: "",
    desc: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: "",
    size: 0.00,
    author: "",
    blender: "0.0",
    engine: "",
    pub: "Januray 1, 1970",
    lic: "",
    desc: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: "",
    size: 0.00,
    author: "",
    blender: "0.0",
    engine: "",
    pub: "Januray 1, 1970",
    lic: "",
    desc: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: "",
    size: 0.00,
    author: "",
    blender: "0.0",
    engine: "",
    pub: "Januray 1, 1970",
    lic: "",
    desc: ""
},
{
    name: "DEFAULT",
    img: ["default.png"],
    file: "",
    size: 0.00,
    author: "",
    blender: "0.0",
    engine: "",
    pub: "Januray 1, 1970",
    lic: "",
    desc: ""
}


];
