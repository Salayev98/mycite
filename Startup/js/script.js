let items = document.getElementsByClassName("corousel-items");
let button = document.querySelector("#Previos");
let button2 = document.querySelector("#Next");
let count = 1;
button2.addEventListener("click", function () {
    button.style.display = "inline"
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none"
    }
    if (count >= items.length) {
        count = items.length - 1;
    }
    if (count >= items.length - 1) {
        button2.style.display = "none"
    }
    items[count].style.display = "block";
    count++;
})
button.addEventListener("click", function () {
    button2.style.display = "inline"
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none"
    }

    count--;
    if (count <= 0) {
        count = 1
    }
    if (count <= 1) {
        button.style.display = "none"
    }
    items[count - 1].style.display = "block";

})