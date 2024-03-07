let gridSize = 0;

document.getElementById("makeGridButton").addEventListener("click", () => {
    gridSize = prompt("How many boxes!");

    if (gridSize <= 0) {
        gridSize = prompt("Please enter an amount between 0 and 100!");
    }

    if (gridSize >= 100) {
        gridSize = prompt("Please enter an amount between 0 and 100!");
    }
    
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
    showResetButton();
}

document.getElementById("container").style.display = "flex";
document.getElementById("container").style.flexWrap = "wrap";

function showResetButton() {
    const resetContainer = document.getElementById("footer");

    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset!"

    resetButton.addEventListener("click", () => {
        const divList = document.querySelectorAll("#childDiv");

        for (let i = 0; i < divList.length; i++) {
            divList[i].style.backgroundColor = "lightgray";
        }
    });

    resetContainer.appendChild(resetButton);
}
