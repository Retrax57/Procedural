const a = document.getElementById("downloadLink");
const modalShare = document.getElementById("modalShare");
const modal = document.getElementById("modal");

function main(start) {
    const span = document.getElementsByClassName("close")[0];
    const row = document.getElementById("materials");
    row.innerHTML = "";

    for (let i = start * 15; i < Math.min(15 * (start + 1), materials.length); i++) {
        row.innerHTML += `<div class="column">
            <div class="card" id="${i}">
                <img src="img/materials/${materials[i].img[0]}" alt="${materials[i].name}" style="width:100%;border-radius: 10px 10px 0 0;">
                <div class="container">
                    ${materials[i].name}
                </div>
            </div>
        </div>`
    }

    const page_nrs = document.querySelectorAll(".page-numbers:not(.prev)");
    for (let i = 0; i < page_nrs.length; i++) {
        if(i == start) {
            page_nrs[i].setAttribute("class", "page-numbers current")
        } else {
            page_nrs[i].setAttribute("class", "page-numbers")
        }
    }

    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
            setModalData(cards[i].getAttribute("id"));
        }
    }

    if (history.state !== null && history.state.page !== undefined) {
        setModalData(history.state.page);
    }

    span.onclick = function () {
        modal.style.display = "none"
        history.pushState({page: undefined}, "Procedural", "/Procedural/")
        document.title = "Procedural"
    };
    modal.querySelector(".btn-download").onclick = function () {
        a.click();
    }
    modal.querySelector(".btn-share").onclick = function () {
        modalShare.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"
            history.pushState({page: undefined}, "Procedural", "/Procedural/")
            document.title = "Procedural"
        } else if (event.target === modalShare) {
            modalShare.style.display = "none";
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
    modal.querySelectorAll("span")[4].innerText = materials[i].engine
    modal.querySelectorAll("span")[5].innerText = materials[i].size + " MB"
    modal.querySelectorAll("span")[6].innerText = materials[i].pub

    if (materials[i].file.includes("http")) {
        a.setAttribute("href", materials[i].file)
        a.setAttribute("download", "")
        a.setAttribute("target", "_blank")
    } else {
        a.setAttribute("href", "https://github.com/Retrax57/Procedural/blob/master/blendfiles/" + materials[i].file + "?raw=true")
        a.setAttribute("download", materials[i].file)
        a.setAttribute("target", "")
    }
}

main(0);
