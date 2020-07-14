const row = document.getElementById("materials");
for (let i = 0; i < materials.length; i += 1) {
    row.innerHTML += `<div class="column">
            <div class="card">
                <img src="img/materials/${materials[i].img[0]}" alt="${materials[i].name}" style="width:100%;border-radius: 10px 10px 0 0;">
                <div class="container">
                    ${materials[i].name}
                </div>
            </div>
        </div>`
}
const modal = document.getElementById("modal");
const cards = document.querySelectorAll(".card");
const span = document.getElementsByClassName("close")[0];
for (let i = 0; i < cards.length; i += 1) {
    cards[i].onclick = function () {
        modal.style.display = "block";
        modal.querySelector("h2").innerHTML = materials[i].name;
        modal.querySelector("img").src = "img/materials/" + materials[i].img[0];
        modal.querySelectorAll("span")[1].innerText = materials[i].lic
        modal.querySelectorAll("span")[2].innerText = materials[i].author
        modal.querySelectorAll("span")[3].innerText = materials[i].blender
        modal.querySelectorAll("span")[4].innerText = materials[i].size + " MB"
        modal.querySelectorAll("span")[5].innerText = materials[i].pub
    }
}
span.onclick = function () {
    modal.style.display = "none"
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}