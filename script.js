let divRef = document.querySelector("div");


let pink = document.getElementById("pink");
let teal = document.getElementById("teal");
let aqua = document.getElementById("aqua");
let purple = document.getElementById("purple");
let colorless = document.getElementById("colorless");



pink.onclick = function() {
    if (divRef.style.backgroundColor != "pink") {
        divRef.style.backgroundColor = "pink";
        divRef.innerHTML = "Pink";
    }

    else {
        divRef.style.backgroundColor = "pink";
        divRef.innerHTML = "Pink";
    }
}
teal.onclick = function() {
    if (divRef.style.backgroundColor != "teal") {
        divRef.style.backgroundColor = "teal";
        divRef.innerHTML = "teal";
    }

    else {
        divRef.style.backgroundColor = "teal";
        divRef.innerHTML = "teal";
    }
}
aqua.onclick = function() {
    if (divRef.style.backgroundColor != "auqa") {
        divRef.style.backgroundColor = "aqua";
        divRef.innerHTML = "aqua";
    }

    else {
        divRef.style.backgroundColor = "aqua";
        divRef.innerHTML = "aqua";
    }
}
purple.onclick = function() {
    if (divRef.style.backgroundColor != "purple") {
        divRef.style.backgroundColor = "purple";
        divRef.innerHTML = "Purple";
    }

    else {
        divRef.style.backgroundColor = "purple";
        divRef.innerHTML = "Purple";
    }
}
colorless.onclick = function() {
    if (divRef.style.backgroundColor != "colorless") {
        divRef.style.backgroundColor = "white";
        divRef.innerHTML = "colorless";
    }

    else {
        divRef.style.backgroundColor = "white";
        divRef.innerHTML = "colorless";
    }
}
let displayButton = document.getElementById("display-btn");

// set up an onclick function for visibilityButton
displayButton.onclick = function() {
    // whenever you click on the button,
    // if the box is visible, hide it 
    if (divRef.style.display != "none") {
        divRef.style.display = "none";
        // update button text
        displayButton.innerHTML = "show";
    }

    // if the box is hidden, show it
    else {
        divRef.style.display = "block";
        // update button text
        displayButton.innerHTML = "hide";
    }
}