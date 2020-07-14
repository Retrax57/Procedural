function main() {
    const modal = document.getElementById("modal");
    const cards = document.querySelectorAll(".card");
    const span = document.getElementsByClassName("close")[0];
    const a = document.getElementById("downloadLink");
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

    for (let i = 0; i < cards.length; i += 1) {
        cards[i].onclick = function () {
            setModalData(i);
        }
    }

    if (history.state.page !== undefined) {
        setModalData(history.state.page);
    }

    span.onclick = function () {
        modal.style.display = "none"
        history.pushState({page: undefined}, "Procedural", "/")
        document.title = "Procedural"
    };
    modal.querySelector(".btn-download").onclick = function () {
        a.click();
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
            history.pushState({page: undefined}, "Procedural", "/")
            document.title = "Procedural"
        }
    }
}

function setModalData(i) {
    modal.style.display = "block";
    document.title = "Procedural :: " + materials[i].name.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    history.pushState({page: i}, "Procedural", materials[i].name.toLowerCase().replace(" ", "_"))
    modal.querySelector("h2").innerHTML = materials[i].name
    modal.querySelector(".description").innerHTML = materials[i].desc
    modal.querySelector("img").src = "img/materials/" + materials[i].img[0]
    modal.querySelectorAll("span")[1].innerText = materials[i].lic
    modal.querySelectorAll("span")[2].innerText = materials[i].author
    modal.querySelectorAll("span")[3].innerText = materials[i].blender
    modal.querySelectorAll("span")[4].innerText = materials[i].size + " MB"
    modal.querySelectorAll("span")[5].innerText = materials[i].pub
    a.setAttribute("href", "https://github.com/Retrax57/Procedural/blob/master/blendfiles/" + materials[i].file + "?raw=true")
    a.setAttribute("download", materials[i].file)
}

main();