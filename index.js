for (var i = 0; i < (16 * 16); i++) {

    var div = document.createElement("div");
    div.style.width = "3em";
    div.style.margin = "0";
    div.style.padding = "0";
    div.style.flex = "0 1 calc(6.25%)";
    //div.innerHTML = "hi";

    document.getElementById("container").appendChild(div);
}

document.getElementById("container").style.display = "flex";
document.getElementById("container").style.flexWrap = "wrap";