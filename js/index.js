let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let defaultValue = 0;
let count = 0;

function increment() {
    count++;
    countEl.textContent++;
}

function save() {
    let saveText = count + " - ";

    saveEl.textContent += saveText;

    count = defaultValue;
    countEl.textContent = defaultValue;
}