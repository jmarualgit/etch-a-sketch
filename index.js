let gridSize = 0;

document.getElementById("makeGridButton").addEventListener("click", () => {
    gridSize = prompt("How many boxes!");
    console.log(`${gridSize}` + " boxes are called!");

    createGrid(gridSize);
});

function createGrid (gridSize) {
    let divisor = 100 / gridSize;

    for (var i = 0; i < (gridSize * gridSize); i++) {

        const div = document.createElement("div");
        div.id = "childDiv";
        div.style.width = "3em";
        div.style.margin = "0";
        div.style.padding = "0";
        div.style.flex = `0 1 calc(${divisor}%)`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#777";
        });
        //div.innerHTML = "hi";
    
        document.getElementById("container").appendChild(div);
    }

    document.getElementById("makeGridButton").style.visibility = "hidden";
}

document.getElementById("container").style.display = "flex";
document.getElementById("container").style.flexWrap = "wrap";