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
        div.style.backgroundColor = "rgb(230, 230, 230)";
        div.style.width = "3em";
        div.style.margin = "0";
        div.style.padding = "0";
        div.style.flex = `0 1 calc(${divisor}%)`;
        div.addEventListener("mouseover", () => {
            let r, g, b;

            if (div.style.backgroundColor == "rgb(230, 230, 230)") {
                console.log("if");
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);

                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                console.log(`else`);
                console.log(div.style.backgroundColor);
                let stringLength = div.style.backgroundColor.length;
                let text = div.style.backgroundColor;

                // get r value
                let nextCommaLocation = text.indexOf(',');
                let newRValue = parseInt(text.substring(4, nextCommaLocation));

                // get g value
                text = text.substring(nextCommaLocation + 2, stringLength);
                nextCommaLocation = text.indexOf(',');
                let newGValue = parseInt(text.substring(0, nextCommaLocation));

                // get b value
                let spaceIndex = text.indexOf(" ");
                text = text.substring(spaceIndex + 1, text.length - 1);

                // subtract values
                newRValue = newRValue - 20;
                newGValue -= 20;
                newBValue = parseInt(text) - 20;

                // assign new colors
                newColor = `rgb(${newRValue}, ${newGValue}, ${newBValue})`
                div.style.backgroundColor = newColor;
            }
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
            divList[i].style.backgroundColor = "rgb(230, 230 ,230)";
        }
    });

    resetContainer.appendChild(resetButton);
}
